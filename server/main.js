import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http'; // See: https://docs.meteor.com/api/http.html
var apiKey = 'AIzaSyDwbZ_q0Pf927tJrhb9aF9cO1EmyBbZrGU';

// Coordinate individual call back to location API to get details of specific location
getDetail = function(prediction, callback) {
	var url = 'https://maps.googleapis.com/maps/api/place/details/json';
	var params = {
		params: {
			key: apiKey,
			placeid: prediction.place_id
		}
	};

	HTTP.call('GET', url, params, function(err, res) {
		if (err) return callback(err);

		return callback(null, formatLocation(res.data));
	});
};

// format data to include both address string and coordinates of the location. This will be used later in distance
// calculation to order results
formatLocation = function(data) {
	if (!data.result || !data.result.geometry) return { };

	return {
		address: data.result.formatted_address,
		coords: [data.result.geometry.location.lat, data.result.geometry.location.lng]
	};
};

// Wrap individual details calls to location API in synchronous block
getDetails = function(predictions, callback) {
	syncGetDetail = Meteor.wrapAsync(getDetail);

	var details = _.map(predictions, function(prediction) {
		detail = syncGetDetail(prediction);
		if (!detail.coords || !detail.address) return;
		return {
			coords: detail.coords,
			text: formatAddress(detail.address)
		};
	});

	return callback(null, details);
};

// Initiate call to Google Maps Autocomplete API
autocomplete = function(search, callback) {
	var url = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
	var params = {
		 params: {
			 key: apiKey,
			 types: 'geocode',
			 input: search,
			 location: '33.7490,-84.3880',
			 radius: 50000,
			 rankBy: 'distance'
		 }
	};

	syncGetDetails = Meteor.wrapAsync(getDetails);

	HTTP.call('GET', url, params, function(err, res) {
		if (err) return callback(err);

		details = syncGetDetails(res.data.predictions);
		centroid = _.map(params.params.location.split(','), function(cord) { return parseFloat(cord) });

		return callback(null, orderDetails(details, centroid));
	});
};

orderDetails = function(details, centroid) {
	var res = _.compact(_.map(details, function(detail) {
		if (!detail) return null;

		return {
			text: detail.text,
			distance: distanceBetween(detail.coords, centroid)
		};
	}));

	return _.sortBy(res, 'distance');
};

// Remove "USA" from result string from Google Maps Location service
formatAddress = function(address) {
	if (!address) return null;
	return address.split(',').slice(0, -1).join(', ');
};

// Utilizing Haversine formula: https://en.wikipedia.org/wiki/Haversine_formula
distanceBetween = function(x, y) {
  var R = 6371; // Radius of the earth in km
  var dLat = (y[0] - x[0]) * (Math.PI / 180);
  var dLon = (y[1] - x[1]) * (Math.PI / 180);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(x[0] * (Math.PI / 180)) * Math.cos(y[0] * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
};

Meteor.methods({
	'Autofill': function(search) {
		var BEGIN = Date.now();

		// Wrap async function in synchronous block to be able to measure efficiency of call
		syncAutocomplete = Meteor.wrapAsync(autocomplete);
		res = syncAutocomplete(search);

		console.log(`Search "${search}" completed in ${Date.now() - BEGIN} ms.`);
		return res;
	}
});

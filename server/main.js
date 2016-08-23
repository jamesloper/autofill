import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http'; // See: https://docs.meteor.com/api/http.html
var apiKey = 'AIzaSyDwbZ_q0Pf927tJrhb9aF9cO1EmyBbZrGU';

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

		var data = { };
		if (res.data.result) {
			data.address = res.data.result.formatted_address;
			if (res.data.result.geometry) {
				data.coords = [res.data.result.geometry.location.lat, res.data.result.geometry.location.lng];
			};
		};
		return callback(null, data);
	});
}

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
}

asyncFunc = function(search, callback) {
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

		var data = _.compact(_.map(syncGetDetails(res.data.predictions), function(datum) {
			if (!datum) return;
			return {
				text: datum.text,
				distance: distanceBetween(datum.coords, _.map(params.params.location.split(','), function(cord) {
					return parseFloat(cord);
				}))
			};
		}));

		return callback(null, _.sortBy(data, 'distance'));
	});
};

formatAddress = function(address) {
	if (!address) return null;
	return address.split(',').slice(0, -1).join(', ');
}

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
}

Meteor.methods({
	'Autofill': function(search) {
		var BEGIN = Date.now();

		syncFunc = Meteor.wrapAsync(asyncFunc);
		res = syncFunc(search);

		console.log(`Search "${search}" completed in ${Date.now() - BEGIN} ms.`);
		return res;
	}
});

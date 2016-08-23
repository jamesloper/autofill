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
		if (err) {
			return callback(err);
		} else {
			return callback(null, res.data.result.formatted_address);
		}
	});
}

getDetails = function(predictions, callback) {
	syncGetDetail = Meteor.wrapAsync(getDetail);
	var details = _.map(predictions, function(prediction) {
		return { text: formatAddress(syncGetDetail(prediction)) };
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
		if (err) {
			return callback(err);
		} else {
			var predictions = res.data.predictions;
			return callback(null, syncGetDetails(predictions));
		}
	});
};

formatAddress = function(address) {
	return address.split(',').slice(0, -1).join(', ');
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

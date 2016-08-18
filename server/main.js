import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http'; // See: https://docs.meteor.com/api/http.html

Meteor.methods({
	'Autofill': function(search) {
		var BEGIN = Date.now();
		
		// api calls, etc
		// api calls, etc
		// api calls, etc
		// api calls, etc
		// api calls, etc
		// api calls, etc
		// api calls, etc
		
		console.log(`Search "${search}" completed in ${Date.now() - BEGIN} ms.`);
	}
});
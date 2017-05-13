import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.AutofillDemo.onCreated(function() {
	this.search = new ReactiveVar('464 ethel st nw');
	this.results = new ReactiveVar();
	var results = this.results;

	this.autorun(() => {
		var search = this.search.get();

		Meteor.call('Autofill', search, function(err, res) {
			if (err) {
				console.log('ERROR:', err);
			} else {
				console.log('RESULT:', res);
				results.set(res);
			}
		});
	});
});

Template.AutofillDemo.helpers({
	search() {
		return Template.instance().search.get();
	},
	results() {
		return Template.instance().results.get();
	},
});

Template.AutofillDemo.events({
	'change input, keyup input': _.throttle(function(e, tpl) {
		tpl.search.set(e.target.value);
	}, 250),
});

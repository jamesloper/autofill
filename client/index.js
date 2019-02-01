import React from 'react';
import App from './ui/App';
import ReactDOM from 'react-dom';

Meteor.startup(function() {
	ReactDOM.render(<App/>, document.getElementById('react'));
});
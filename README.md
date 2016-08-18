## Process
- User inputs some characters of address.
- Autofill results (up to 5 max) show in the following format:

<img src="https://i.imgur.com/Yf69KwL.png" width="310">

Screenshot is taken from our checkout page.

## Requirements

- Create a Meteor server-side method.
- Use the built-in meteor/http to call the API from the server.
- Results must be formatted like this: `[street number] [street name], [city] [state], [zipcode]`
- Least amount of client side code allowable by the laws of nature.
- Use the coordinates 33.7490° N, 84.3880° W as the search location.
- Try your best to beat 600 ms from start to return time as measured on the server.
- Npm is fair game on the server, but we didn't find it useful in our case.
- Must be super accurate, functionality is the most important part.
- Tabs not spaces.

Here are the params to the autocomplete call:

    var params = {
	      key: 'AIzaSyDwbZ_q0Pf927tJrhb9aF9cO1EmyBbZrGU',
	      location: '33.7490,84.3880',
	      radius: 50000,
	      rankby: 'distance'
    };

## This Repo

This repo is a template that has the following features.

- Throttles (not debounce) user input by 250 ms seconds client side.
- Stub function that includes a basic execution length readout.

## Big Picture
- Don't work more than 7 hours
- Reach out to James if you get stuck

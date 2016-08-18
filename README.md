<img src="https://i.imgur.com/Tfi0xR5.jpg" width="600" style="float:right">

## Process
- User inputs some characters of address.
- Up to 5 autofill results show in the above format.

## This Repo

This repo is a template that has the following features.

- Unstyled text box for address input and unstyled list for autofill results.
- Throttles user input by 250 ms seconds, client side. Do not alter.
- Stub function that includes a basic execution length readout.

## Requirements

- Create the UI that looks like the picture.
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

## Big Picture
- Don't work more than 7 hours
- Reach out to James if you get stuck

## Project Overview
We'd like to assess your programming ability. We have created this project as a means to see how well you can adapt to our full-stack javascript framework, Meteor. The task is simple — create a basic web app written in Meteor. The web app will have just one feature: an address autofill, backed by a list of objects of a certain address schema.

While this may sound simple at first, Google Maps Autocomplete API results are merely address `strings` and `place_id`s, but we need more data. You must therefor call another API to add the missing data. This is the opposite of a clean implementation, but we challenge you to handle this use case with grace, as Google provides the only reliable Street Address API.

<img src="https://i.imgur.com/Tfi0xR5.jpg" width="600">

## This Repo

- This repo contains some basic building blocks.
- There is already an `input` and `ul` element in the client template.
- The `server/main.js` file is a stub. It has a function that logs the execution time.

## Requirements

### Server
- The desired output is a list of street addresses from Google Autocomplete API, but with all results normalized, and with same order as the autocomplete api call.
- You may use NPM on the server (but we didn't find it useful).
- Use the HTTP package from [meteor/http](https://docs.meteor.com/api/http.html) to call the API from the server. It has already been added.
- For this test your results should prefer addresses near Atlanta, GA (3.7490° N, 84.3880° W).
- Beat 600 ms execution time logged on the server.

### Client
- Use the **absolute least** amount of client side code.
- Pretty styling is not required.
- The content of the `li` should be the `street` field of each result.

Here are the params to the autocomplete call:

``` javascript
var params = {
      key: 'AIzaSyDwbZ_q0Pf927tJrhb9aF9cO1EmyBbZrGU',
      location: '33.7490,-84.3880',
      radius: 50000,
      rankby: 'distance'
};
```

Here is a good schema for each item in the results set.

``` javascript
{
	'place': 'AIzaSyDwbZ_q0Pf927tJrhb9aF9cO1EmyBbZrGU',
	'street': '464 Ethel St NW, Atlanta, GA 30318',
	'city': 'Atlanta',
	'state': 'GA',
	'zipcode': '30318',
	'latlng': {
		'lat': '33.7490',
		'lng': '-84.3880'
	}
}
```

These requirements are super strict but they are not as strict at Real Hux HQ.

## Help
- Don't work more than 6 hours
- Reach out to James if you get stuck
- [Meteor Tutorial](https://www.meteor.com/try)
- [Meteor Guide](http://guide.meteor.com)
- [Meteor Docs](https://docs.meteor.com)

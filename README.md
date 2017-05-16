## Project Overview
We have created this project as a means to see how well you can implement your version of the Hux address autofill form. The task is simple — create a basic web app with a **text box** for address entry and a results **ul** backed by objects of a **consistent, normalized schema**. It is definitely expected that it should work as well as the one at hux.com checkout.

While this may sound simple at first, Google Maps Autocomplete API results are merely address `strings` and `place_id`s, but we need more data. You must therefore call another API to add the missing data. This is the opposite of an ideal implementation, but we challenge you to handle this use case with grace, as Google provides the only reliable Street Address API.

<img src="https://i.imgur.com/Tfi0xR5.jpg" width="600">

## This Repo

- This repo contains some basic building blocks in Meteor.
- There is already an `input` and `ul` element in the client template.
- The `server/main.js` file is a stub. It has a function that logs the execution time.

## Requirements

### Server
- The desired output is a list of street addresses from Google Autocomplete API, but with all results normalized, and with same order as the Autocomplete API call.
- For this test your results should prefer addresses near Atlanta, GA (33.7490° N, 84.3880° W).
- Beat 600 ms execution time logged on the server.

### Client
- Use the **absolute least** amount of client side code.
- Pretty styling is not required as this is more of a backend role.
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

## Help
- Don't work more than 6 hours
- Reach out to James if you get stuck at james@hux.com

## Help with Meteor platform
- [Meteor Tutorial](https://www.meteor.com/try)
- [Meteor Guide](http://guide.meteor.com)
- [Meteor Docs](https://docs.meteor.com)

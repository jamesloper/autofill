## Project Overview
We have created this project as a means to see how well you can implement your version of a PREVIOUS version of the Hux address autofill form. The task is simple — create a basic web app with a **text box** for address entry and a results **ul** backed by transformed objects of a **consistent, normalized schema**. It is definitely expected that it should work as well as the one at hux.com.

While this may sound simple at first, Google Maps Autocomplete API results only include address `strings` and `place_id`s, but we need more data. You must therefore call another API to add the missing data. This is the opposite of an ideal implementation, but we challenge you to handle this use case with grace.

<img src="https://i.imgur.com/Tfi0xR5.jpg" width="600">

## This Repo

- This repo contains some basic building blocks useful if you are using Meteor, but you don't have to clone this repo. You can start with any language.
- There is already an `input` and `ul` element in the client template.
- The `server/methods.js` file is a stub. It has a function that logs the execution time.

## Start Application

Install meteor: `curl https://install.meteor.com/ | sh` or https://www.meteor.com/install
``` bash
meteor npm install
meteor
```

## Requirements

#### Server
- The desired output is an array of street addresses from Google Autocomplete API, but with all results normalized, and in same order as the Autocomplete API call.
- For this test your results should prefer addresses near Atlanta, GA (33.7490° N, 84.3880° W).
- Beat 600 ms execution time as logged on the server.

#### Client
- Use the **absolute least** amount of client side code.
- Pretty styling is not required as this is more of a backend test.
- The text content of the `li` should be the `street` field of each result.

Here are the params to the autocomplete call:

``` javascript
const params = {
      key: 'AIzaSyDwbZ_q0Pf927tJrhb9aF9cO1EmyBbZrGU',
      location: '33.7490,-84.3880',
      radius: 50000,
      rankby: 'distance'
};
```

Here is the required schema for each item in the results set.

``` javascript
{
	'place': 'bla-bla-bla',
	'street': '464 Ethel St NW, Atlanta, GA 30318',
	'city': 'Atlanta',
	'state': 'GA',
	'zipcode': '30318',
	'location': {'type': 'Point', 'coordinates': [-84.3880, 33.7490]}
}
```

## Help
- Don't work more than 6 hours
- Reach out to James if you get stuck at james@hux.com

## Want to use the Meteor platform?
- [Meteor Tutorial](https://www.meteor.com/try)
- [Meteor Guide](http://guide.meteor.com)
- [Meteor Docs](https://docs.meteor.com)

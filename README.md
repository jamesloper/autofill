## Project Overview
We have created this project to see how well you can reimplement Hux's address autofill form. 

The task is simple — create a basic web app with a **text box** for address entry and a results **ul** backed by transformed objects of a **consistent, normalized schema**. It is definitely expected that it should work as well as the one at hux.com.

While this may sound simple, Google's Autocomplete API only includes address and place_id, but we need more details in the object.

<img src="https://i.imgur.com/Tfi0xR5.jpg" width="600">

## This Repo

- This repo contains some basic building blocks useful if you want to do it in Meteor, but you are free to build it in plain old Node.
- There is already an `<AddressInput/>` component started.
- The `server/methods.js` file is a stub. It has a function that logs the execution time.

## Start Application

To run this starter application, just follow these steps.

Install Meteor `curl https://install.meteor.com/ | sh`

npm install and run the project

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
      key: 'blahhh',
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

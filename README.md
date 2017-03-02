## Project Overview
We'd like to assess your programming ability. We have created this project as a means to see how well you can adapt to our full-stack javascript framework, Meteor. The task is simple — create a basic web app written in Meteor. The web app will have just one feature: an address autofill, backed by a list of objects of a certain address schema.

While this may sound simple at first, Google Maps's autocomplete feature only outputs an address string and a place_id, but we need more data. You must therefore call another API back to back to add the missing data. The image below serves as a complete wireframe of the web app. 

<img src="https://i.imgur.com/Tfi0xR5.jpg" width="600">

The desired output is a list of street addresses in the **same order** they come out of Google Autocomplete API but with the addresses all **refomatted to the same format**. The list should be backed by the schema 

``` javascript
{
	'place': 'AIzaSyDwbZ_q0Pf927tJrhb9aF9cO1EmyBbZrGU',
	'street': '464 Ethel St NW, Atlanta, GA 30318',
	'city': 'Atlanta',
	'state': 'GA',
	'zipcode': '30318',
	'latlng': '33.7490,-84.3880',
};
```
These requirements are super strict but they are not as strict at Real Hux HQ.

## This Repo

The `client/` directory is a template for building a web app with the following features:

- An unstyled `input` for the address to be typed into.
- An event listener attached to `input` that throttles keyup events by 250 ms seconds. Do not alter this.
- An unstyled `ul` element which should be populated with your autofill results.

The `server/main.js` file is a stub. It has a function that logs the execution time.

## Requirements

### Client
- UI should be based on the above wireframe.
- User inputs some characters of a street address.
- Up to 5 possible results fill in the `ul` element.
- Results must be formatted as such: `[street number] [street name], [city] [state], [zipcode]`
- Use the **absolute least** amount of client side code.

### Server
- You may use NPM on the server (but we didn't find it useful).
- Use the HTTP package from [meteor/http](https://docs.meteor.com/api/http.html) to call the API from the server. It has already been added.
- Accuracy of results is one of the most important aspects.
- For this test your results should prefer addresses near Atlanta, GA (3.7490° N, 84.3880° W).
- Try your best to beat 600 ms execution time as logged on the server.

Here are the params to the autocomplete call:

``` javascript
var params = {
      key: 'AIzaSyDwbZ_q0Pf927tJrhb9aF9cO1EmyBbZrGU',
      location: '33.7490,-84.3880',
      radius: 50000,
      rankby: 'distance'
};
```

## Help
- Don't work more than 6 hours
- Reach out to James if you get stuck
- [Meteor Tutorial](https://www.meteor.com/try)
- [Meteor Guide](http://guide.meteor.com)
- [Meteor Docs](https://docs.meteor.com)

<img src="https://i.imgur.com/Tfi0xR5.jpg" width="600" style="float:right">

## Autocomplete Test
This is a test for applicants for the developer position at Hux. To complete the test, clone the repo and develop an interface and one meteor method that satisfies all the requirements. 

The desired output is a list of valid street addresses that contain the characters typed by the user and are close the users location (Lat & Lon can be hard coded for the test).

## This Repo

The client/ directory is a template for building a mobile app with the following features:

- An unstyled `input` for the address to be typed into.
- An event listener attached to `input` that throttles keyup events by 250 ms seconds. Do not change this.
- An unstyled `ul` element which should be populated with your autofill results.

The server/main.js file is a stub. It has a function that logs the execution time.

## Requirements

#### Client
- Create the UI that looks like the image.
- The user can input some characters of a street address.
- Up to 5 possible results fill in the `ul` element.
- Results must be formatted like this: `[street number] [street name], [city] [state], [zipcode]`
- Use the **absolute least** amount of client side code.

### Server
- You may use Npm on the server if you like (but we didn't find it useful).
- Use HTTP from [meteor/http](https://docs.meteor.com/api/http.html) to call the API from the server. It has already been added.
- Accuracy/quality of results is the most important aspect.
- For this test your results should prefer addresses near Atlanta, GA. So localize the result set around 33.7490° N, 84.3880° W. 
- Try your best to beat 600 ms execution time as logged on the server.
- Tabs instead of spaces.

Here are the params to the autocomplete call:

    var params = {
	      key: 'AIzaSyDwbZ_q0Pf927tJrhb9aF9cO1EmyBbZrGU',
	      location: '33.7490,-84.3880',
	      radius: 50000,
	      rankby: 'distance'
    };

## Big Picture
- Don't work more than 7 hours
- Reach out to James if you get stuck

## Help
[Meteor Tutorial](https://www.meteor.com/try)
[Meteor Guide](http://guide.meteor.com)
[Meteor Docs](https://docs.meteor.com)

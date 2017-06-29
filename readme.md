# GA WDI London, Project 3



## groupmove

Groupmove is an app that provides groups of people with the ability to find rental properties together, hopefully removing stress in the process! Built with a MEAN stack, this app uses [Satellizer](https://github.com/sahat/satellizer) for authentication and oauth authorisation via Facebook. The [Police API](https://data.police.uk/docs/) was used to provide local crime data on individual properties.

### User Journey

A difficulty faced by an individual looking to live in a house or flat share is often the inability to coordinate all other potential house mates to attend a specific viewing. This app aimed to create a platform where lack of full attendance wouldn't hinder a group in finding and signing on a property to rent together.

As this app is about bringing individuals together, we wanted to offer users a means of connecting. Users can therefore login via oAuth using the Facebook API to authorise their credentials and chat over Facebook.


### Build

This app is built with an [Express](https://github.com/expressjs/express) back-end, serving an API that's consumed by a client-side Angular app.


### Challenges

The biggest blocker we encountered was populating each group with its members in order that each user could add to 

<h1>Fantasy Football App!</h1>
[![BuildStatus](https://travis-ci.org/zackluckyf/angular-project.png)](https://travis-ci.org/zackluckyf/angular-project)

[Install Steps](#install-steps)

[Features](#features)

[Next Steps](#next-steps)

[Looking Ahead](#looking-ahead)

## Install Steps

  * Clone Project  
  * Install Global Dependencies
    * npm install -g gulp, karma, jasmine, karma-jasmine, protractor, webpack
  * Install Dev Dependencies
    * npm install
  * Run node server
    * cd expserver
    * node app.js
  * Run Http Server
    * npm start
    * navigate to 'http://localhost:8000'
    * enjoy the app!

## Features

  * Single Page Application using angular ui router
  * Utilizes an Express Node server as a proxy to resolve CORS issue
  * Uses third party API to keep data fresh
  * Built with AngularJS
  * Component based
  * Webapck used to bundle dependencies

## Next Steps

Controllers have state access through the main module's SetupFactory!

Need a new remove function to get rid of players(look into splice in the SetupFactory)

Move the initialization of state to the config with the state provider,

keep the state updaters in the controllers modification functions to

maintain state as players are added. Use the SetupFactory to make the players name camel case.

## Looking Ahead

Fix HTML and SCSS

Create a typeahead directive (optional)

Create a toggle directive (loading page, also optional)

Implement WACAG standards (optional)

<h1>Fantasy Football App!</h1>
[![BuildStatus](https://travis-ci.org/zackluckyf/angular-project.png)](https://travis-ci.org/zackluckyf/angular-project)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ca0c6e16ee65469c8efdd75da8183a8e)](https://www.codacy.com/app/fanning-34/angular-project?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=zackluckyf/angular-project&amp;utm_campaign=Badge_Grade)

[Install Steps](#install-steps)

[Features](#features)

[Dev-Features](#dev-features)

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

  * Single Page Application Built with AngularJS using angular ui router
  * Makes use of a third party API to keep data fresh
  * Component based, so it's easier to expand and reuse

## Dev Features

  * Webpack used to bundle dependencies
  * Unit tests done in karma and jasmine
  * End to end tests done in protractor
  * Travis-ci integrated
  * Gulp used to compile SASS, concat, and uglify
  * Utilizes an Express Node server as a proxy to resolve CORS issue

## Next Steps

  * Create a toggle directive
  * Create a typeahead directive

## Looking Ahead

  * Fix HTML and SASS
  * Implement WCAG standards
  * Implement OAUTH
  * Setup Database to store historical trade analysis

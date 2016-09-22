<h1>Fantasy Football App!</h1> [![Build Status](https://travis-ci.org/zackluckyf/angular-project.png)](https://travis-ci.org/zackluckyf/angular-project)

[Install Steps](#install-steps)

[Next Steps](#next-steps)

[Next Steps](#looking-ahead)

## Install Steps

1) Clone Project

2) Install Global Dependencies

  i) npm install -g gulp, karma, jasmine, karma-jasmine, protractor, webpack

3) Install Dev Dependencies

  i) npm install




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

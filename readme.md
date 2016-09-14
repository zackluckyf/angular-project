Global Dependencies

npm install -g gulp, karma, jasmine, karma-jasmine, protractor, webpack, istanbul

Go to installed packages and change tree view to not hide .gitignore files

Have finally gotten a working code coverage.

Issues with it:

The whole bundle includes a lot of angular I obviously don't test. Sourcemaps?

webpackConfig has something in there that screws tests up! Don't run webpack, have Dane help!

Karma coverage reporter which fails test wise right now is commented out to get green CI build

pages(aka features) in app contains angular code, the issue with multiple controllers popped up,
need to config each one on load with state.

Setup Server

  -be queryable

  -maintain state between pages

Fix HTML and SCSS

Create a typeahead directive utilizing the node server (optional)

Create a toggle directive (loading page, also optional)

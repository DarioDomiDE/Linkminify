# Linkminify // Link Shortener

This Service is able to transform any http link into a minimized and trackable link, will track a click on such a generated link and also redirect the user to the initial URL. Example: https://doma.in/long/path will become https://link.doma.in/abc123. It provices a REST API, was build with NodeJS with ES6 and requires a MongoDB database running to work

## Installation

Before running this program, set NODE_ENV to 'production' or 'development' for different configs
```Bash
export NODE_ENV=production #on linux machines
SET NODE_ENV=production #on windows machines
```

To install and run this program:
```Bash
npm install
node main.js
node main.js > output.log 2> err.log #on production machines
```

Run tests
```Bash
mocha tests --recursive
mocha tests --recursive --watch #optional: stay in the test-mode and refreshing itself
```

## Rest API
To have a detailed view into the methods of the API and what return to except, please have a look into the SwaggerUI Documentation:
https://app.swaggerhub.com/apis/DarioDomiDE/linkminify/1.0.0#/

## FYI
A User-Management is not integrated yet. Also this is just the API and doesn't contains a frontend.

## ToDo
  * [x] Update REST API
  * [ ] Update controller to new REST Doc
  * [ ] ES6 style (and usage of import, export default, async, const/let)
  * [ ] Bug connecting returns True
  * [ ] including ESLint (for unused styles)
  * [ ] DotEnv lib
  * [ ] using of npm packages for handling routes, hashes, config etc
  * [ ] using forever module
  * [ ] if crashes happen -> throw error in 404 / 500 return, but application shouldn't crash
  * [ ] repository pattern
  * [ ] acceptance-, integration- and unit-tests
  * [ ] mocks for MongoDB (and others that needed to be mocked)
  * [ ] instead of random-ids use the autoincrement-id parsed as an alphabet
  * [ ] use semicolons
  * [ ] another abstraction layer for concrete db implementation
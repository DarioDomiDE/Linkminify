# Linkminify / Link Shortener

This Service is able to transform any http link into a minimized and trackable link, will track a click on such a generated link and also redirect the user to the initial URL. Example: https://doma.in/long/path will become https://link.doma.in/abc123. It provices an RESTful API and was build powered by NodeJS with ES6.

## Installation

Before running this program, set NODE_ENV to 'production' or 'development' for different configs
```Bash
export NODE_ENV=production #on linux machines
SET NODE_ENV=production #on windows machines
```

To run this program:
```Bash
npm install
node main.js
node main.js > output.log 2> err.log #on production machines
```

## Rest API
https://app.swaggerhub.com/apis/DarioDomiDE/linkminify/1.0.0#/

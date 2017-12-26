# Linkminify - Specification

This Service is able to transform any http link into a minimized and trackable link, will track a click on such a generated link and also redirect the user to the initial URL. Example: https://doma.in/long/path will become https://link.doma.in/abc123. It provices an RESTful API and was build powered by NodeJS with ES6.

## Features (that would be cool to use)

- Clean Code
- ✓ MongoDB
- ✓ MongoOse ODM
- SwaggerUI for RestAPI Doc
- Unit-Tests
- some quick&dirty ReactJS Frontend
- hosted somewhere
> to be continued...


## Installation

To run this program:
```Bash
npm install	
node main.js
(or production:) node main.js > output.log 2> err.log
```

## Models:

Link
- RealURL
- MiniURL
- AccessCount

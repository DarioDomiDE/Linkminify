# Linkminify - Specification

This API can transform any http link into a minimized and trackable link. The service is be able to track a click on such a generated link and also redirect the user to the initial URL. Example: https://doma.in/long/path will become https://link.doma.in/abc123. The focus is not speed but quality of code and architecture.

### Technical Requirements

- ECMAScript 6
- ExpressJS
- API (RESTful or GraphQL)

## Features (that would be cool to use)

- Clean Code
- ✓ MongoDB
- ✓ MongoOse ODM
- SwaggerUI for RestAPI Doc
- Unit-Tests
- some quick&dirty ReactJS Frontend
- hosted somewhere


## Installation

To run this program:
```Bash
npm install	
node main.js
(or production:) node main.js > output.log 2> err.log
```

#### Models:

Link
- RealURL
- MiniURL
- AccessCount

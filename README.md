# Linkminify - Specification

Task was creating an API which is able to transform any http link into a minimized and trackable link. 
The service should be able to track a click on such a generated link and also redirect the user to the initial URL. Example: https://doma.in/long/path will become https://link.doma.in/abc123 The focus of the task is not speed but quality of code and architecture. 

### Technical Requirements

- ECMAScript 6
- ExpressJS
- API (RESTful or GraphQL)

### Notices

To run this program:
  * npm install	
  * node main.js
  * (or optional:) node main.js > output.log 2> err.log

#### Services (that would be cool to use)

- Clean Architecture
✓ MongoDB
✓ GraphQL or some ODM (currently using MongoOse)
- SwaggerUI for RestAPI Doc
- Unit-Tests
- some quick&dirty ReactJS Frontend
- hosted somewhere

#### Models:

Link
- ID
- UserId (not used yet)
- RealURL
- MiniURL

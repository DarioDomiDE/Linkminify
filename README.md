# Linkminify - Specification

Task was creating an API which is able to transform any http link into a minimized and trackable link. 
The service should be able to track a click on such a generated link and also redirect the user to the initial URL.

Example: https://www.domain.com/some/very/long/path will become https://link.domain.com/abc123

The focus of the task is not speed but quality of code and architecture. 

### Technical Requirements

- ECMAScript 6
- ExpressJS
- API (RESTful or GraphQL)

### Notices

Run with logs:
' node main.js > output.log 2> err.log

Services that would be cool to use

- MongoDB
- GraphQL or any ORM ()
- SwaggerUI for RestAPI Doc

#### Models:

Links
- ID
- UserId (not used yet)
- RealURL
- MiniURL

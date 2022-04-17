Layers:

HTTP layer:
1. Routes - handle the HTTP requests and route to controllers
2. Contollers - take request object, pull out data from request, validate, send to services

Business logic layer:
3. Services - contain the business logic, call data access layer or models, call api's external to the Node application, algorithmic code
4. Models - db requests, schemes, model api's...

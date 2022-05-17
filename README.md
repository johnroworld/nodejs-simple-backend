# Simple backend created from NodeJs and ExpressJs based on the given task from [Original ReadMe](Original.md)

## Clone Repository
```
git clone https://github.com/johnroworld/nodejs-simple-backend.git
```

## Installation

Go to root directory of the project and run:
```
npm install
```

## Run API REST

Run node application:
```
node run start
```
Note: This will listen to port 3000

For testing: There are 2 ways to test the API:

1.) Postman (for reference, you can import .postman_collection.json file located in the same path of the application's executable).

Sample endoint: 
```
http://localhost:3000/api
post data: fn:getVersion
```
2.) Run post scripts under "posts" folder

Sample command:
```
1.) node get-version
2.) node get-unix-timestamp
3.) node os-timezone
4.) node change-os-timezone
```
Note: Must go to > path/to/directory/nodejs-simple-backend/posts/main.js

## Done tasks

1.) Creating API Endpoint for getting version.

2.) Creating API Endpoint for getting unix timestampo.

3.) Creating API Endpoint for getting OS timezone.

4.) Creating API Endpoint for chaning OS timezone.


## Future Improvements

1. Since NodeJs and ExpressJs is quite new to me, deep dive and study the following: Node JS modules, middleware, HTTP Requests.
2. Still need to practice NodeJs logging. I found interesting logging such as Winston Logger.

## Added libraries:
1. ExpressJs
2. Body parser
3. Cors
4. Request

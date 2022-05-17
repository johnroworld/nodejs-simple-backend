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
Also run:
```
npm install --save-dev nodemon
```

## Run API REST

Run node application:
```
node main.js
```
Note: This will listen to port 3000

For testing: There are 2 ways to test the API:

1.) Postman (for reference, you can import .postman_collection.json located in the same directory).

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

Since NodeJs and ExpressJs is quite new to me, deep dive and study the following: Node JS modules, middleware, HTTP Requests.

## Added libraries:
1. ExpressJs
2. Body parser
3. Cors
4. Request

Note:
-Silverstripe requires php unit with a version which is no longer supported on PHP 8.
-If CHMOD error occured, just remove the htaccess file mentioned on trace and reinstall composer.

//set a reference to the request module
var request = require('request'),
    postData = {},
    postConfig = {},
    postSuccessHandler = null;

//create an object to send as POST data
postData = {
    fn:'getOsTimezone',
};

//the config for our HTTP POST request
postConfig = {
    url:'http://localhost:3000/api',
    form: postData,
    headers: {"content-type": "application/json"}
};

//the HTTP POST request success handler
postSuccessHandler = function (err, httpResponse, body) {
    //look for this message in your JS console:
    console.log(body);
};

//make the POST request
request.post(postConfig, postSuccessHandler);
var request = require('request');

//Custom Header pass
var headersOpt = {
    "content-type": "application/json;charset=UTF-8",
};
request({
        method:'GET',
        url:'https://jsonplaceholder.typicode.com/posts/5',
        headers: headersOpt,
        json: true,
    }, function (error, response, body) {
        //Print the Response
        console.log(body);
        console.log("Response: "+response.statusCode);
});

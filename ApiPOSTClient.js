var request = require('request');

//Custom Header pass
var headersOpt = {
    "content-type": "application/json;charset=UTF-8",
};
request({
        method:'post',
        url:'https://jsonplaceholder.typicode.com/posts',
        form: {"userId":15,"Title":"Prasun Mitra..", "body":"This is for testing"},
        headers: headersOpt,
        json: true,
    }, function (error, response, body) {
        //Print the Response
        console.log(body);
        console.log("Response: "+response.statusCode);
});

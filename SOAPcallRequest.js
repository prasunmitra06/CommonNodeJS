var request = require('request');
let xml =
'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:qtre="http://Main.Service">'+
   '<soapenv:Header/>'+
   '<soapenv:Body>'+
      '<qtre:GetUsers>'+
         '<qtre:sSearchText></qtre:sSearchText>'+
      '</qtre:GetUsers>'+
   '</soapenv:Body>'+
'</soapenv:Envelope>';

var options = {
  url: 'http://192.168.0.28:10005/MainService/WindowsService?wsdl',
  method: 'POST',
  body: xml,
  headers: {
    'Content-Type':'text/xml;charset=utf-8',
    'Accept-Encoding': 'gzip,deflate',
    'Content-Length':xml.length,
    'SOAPAction':"http://Main.Service/AUserService/GetUsers"
  }
};

let callback = (error, response, body)=>{
  if (!error && response.statusCode == 200) {
    console.log('Raw result', body);
    var xml2js = require('xml2js');
    var parser = new xml2js.Parser({explicitArray: false, trim: true});
    parser.parseString(body, (err, result) => {
      console.log('JSON result', result);
    });
  };
  console.log('E', response.statusCode, response.statusMessage);  
};
request(options, callback);
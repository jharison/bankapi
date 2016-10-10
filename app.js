var http = require('http');
var express = require('express');
var customers = require('./customers.js');
var app = express();

app.use(function(request,response,next){
console.log(request.method + ' via --> ' + request.url);
next();
});

app.get('/', function(request, response){
console.log(customers.getCustomers());
response.json(
  {
    customersList:customers.getCustomers()
  }
);

});

app.get('/count', function(request, response){

  console.log(customers.getCustomersCount());
  response.json(
    {
      customersCount:customers.getCustomersCount()
    }
  );
  });

http.createServer(app).listen(8080);

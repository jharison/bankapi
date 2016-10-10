var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var customers = require('./customers1.js');
var app = express();

//Configuration du body Parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({

  extended:true

}));

app.use(function(request,response,next){
  console.log(request.method + ' via --> ' + request.url);
  next();
});

//Récupérer tous les clients

app.get('/customers', function(request, response){
  var customersList = customers.getCustomers();
  response.json(
    {
      customersList:customersList
    });

  });

  //Récupérer tous les clients ayant l'id passé en paramètre

  app.get('/customers/:id', function(request, response){

    //Récupérer l'id passé en paramètrue

    var customerId = request.params.id;

    //TODO: récupérer les clients avec id

    var foudCustomers = customers.getCustomerById(customerId);

    response.json(
      {
        customer:foudCustomers
      });
    });

    app.post('/customers', function(request, response){

      //Récupérer les clients passés en parametre

      var aCustomer = request.body;

      console.log('Adding : ' + JSON.stringify(aCustomers));

      // ajout du client

      customers.addCustomer(aCustomer);
      response.sendStatus(200);
    });

    //Mettre à jour les clients ayant l'id passé en parametre

    app.put('/customers/:id', function(request, response){

      //Récupérer l'id passé en paramètrue
      var customerId = request.params.id;

      //Récupérer les données à mettre à jour
      var aCustomer = request.body;

      //Récupérer les clients avec id
      var foundCustomers = customers.getCustomerById(customerId);

      //Mettre à jour les clients
      customers.updateCustomer(foundCustomers);
      response.sendStatus(200);
    });

    //Supprimer le client ayant l'id passé en parametre
    app.delete('/customers/:id', function(request, response){

      //Récupérer l'id passé en paramètrue
      var customerId = request.params.id;

      //Récupérer les clients avec id
      var foundCustomers = customers.getCustomerById(customerId);

      customers.deleCustomer(foundCustomers);
      response.sendStatus(200);

    });

    http.createServer(app).listen(3000);

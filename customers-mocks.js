var _ = require('lodash');

var customers = [
{
  id:1,
  firstname:'Jean',
  lastname:'Petit',
  adresse:'1, rue Jean Jaurès - Paris'
},

{
  id:2,
  firstname:'Pascal',
  lastname:'Dupond',
  adresse:'1, rue de la Paix - Nantes'
}

];

//Récupérer tous les clients
function getCustomers(){
  return customers;
}

//Récupérer tous les clients (id numero du client)
function getCustomerById(id){
  var aCustomer = {};
  var idInNumber = _.toNumber(id);
  aCustomer = _.find(customers, {'id':idInNumber});

  //Boucler sur le tableau - Trouver l'element qui a le meme id passé en param
  //Retourner l'element trouvé

  return aCustomer;
}

//Ajouter un client
function addCustomer(aCustomer){
  var foundCustomer = _maxBy(customers,'id');
  var newId = foundCustomer.id+1;
  customers.push(aCustomer);
}

//Mettre à jour un client
function updateCustomer(foundCustomer,aCustomer){
  var customerIdToUpdate = foundCustomer.id;
}

function deleteCustomer(foundCustomer){

//TODO

}


module.exports = {

  getCustomers : getCustomers,
  getCustomerById:getCustomerById,
  addCustomer:addCustomer,
  updateCustomer:updateCustomer,
  deleteCustomer:deleteCustomer

};

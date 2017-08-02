const clients = require('./clients.json')
const myArg = process.argv[2]

var searchByCompany = function(company) {
  var formattedCompany = company.toLowerCase()
  var newArr = []
  for (var i = 0; i < clients.length; i++) {
    var formattedClients = clients[i].company.toLowerCase()
    if (formattedClients == formattedCompany) {
      var newObj = {}
      newObj.id = clients[i].id
      newObj.company = clients[i].company
      newObj.phone = clients[i].phone
      newArr.push(newObj)
       return newArr
    }
  }
}


searchByCompany(myArg)
console.log(searchByCompany(myArg));

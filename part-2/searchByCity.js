const clients = require('./clients.json')
const myArg = process.argv[2]

var searchByCity = function(city) {
  var formattedCity = city.toLowerCase()
  var newArr = []
  for (var i = 0; i < clients.length; i++) {
    var formattedClient = clients[i].city.toLowerCase()
    if (formattedClient == formattedCity) {
      var newObj = {}
      newObj.id = clients[i].id
      newObj.id = clients[i].rep_name
      newObj.city = clients[i].city
      newObj.state = clients[i].state
      newArr.push(newObj)
       return newArr
    }
  }
}


searchByCity(myArg)
console.log(searchByCity(myArg));

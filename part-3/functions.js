var funcProps = {
  nameProps: function nameProps(obj)  {
    if( Object.prototype.toString.call( obj ) !== '[object Object]' ) {
      return  'Invalid Entry'
    }else{
      var arr = Object.keys(obj);
      return arr.sort()
    }
  }
}

let friend = {
  name: 'Dominique',
  age: 30,
  phone: '555-555-5555'
}

let family = {
  name: 'Diane',
}

let codes = [1,2,3,4]


funcProps.nameProps(friend)
funcProps.nameProps(family)
funcProps.nameProps(codes)
funcProps.nameProps('hello')

module.exports = { funcProps }

var func = {
  nameProps: function nameProps(obj)  {
    if( Object.prototype.toString.call( obj ) === '[object Array]' ) {
      return 'Invalid Entry'
    }
    var arr = Object.keys(obj);
    console.log(arr.length);

    console.log(arr.sort(function(a, b) {
      return a-b}));
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


func.nameProps(friend)
func.nameProps(family)
func.nameProps(codes)

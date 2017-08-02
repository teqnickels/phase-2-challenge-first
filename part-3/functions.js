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

module.exports = { funcProps }

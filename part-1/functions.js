
var dateObj = {
  format: function date(date) {
    if(!parseInt(date)){
      throw "Invalid Entry " + date
    }else{
      var dateArr = date.split( '/' )
      for (var i = 0; i < dateArr.length; i++) {
        dateArr[i] = parseInt( dateArr[i] )
      }
  }
    var year = dateArr.pop();
    dateArr.unshift(year)
    return dateArr
  },
  monthOfTheYear: function month( date ) {
    try{
      var formattedDate = this.format(date)
      var date = new Date(date);
      var dateString = date.toString()
      var monthArr = dateString.split(' ')
      var month = monthArr[1]
      return month
    }
    catch(error) {
      console.log(error);
    }
  }
}

module.exports = { dateObj }

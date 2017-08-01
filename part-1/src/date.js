
var date = {
  format: function date(date) {
    var dateArr = date.split( '/' )
    for (var i = 0; i < dateArr.length; i++) {
      dateArr[i] = parseInt( dateArr[i] )
    }
    var year = dateArr.pop();
    dateArr.unshift(year)
    return dateArr
  },
  monthOfTheYear: function month( date ) {
    var formattedDate = this.format(date)
    console.log( new Date (formattedDate) )
  }
}
date.monthOfTheYear( '7/12/1981' )
// module.exports { funcs }

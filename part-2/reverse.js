var func = {
  reverseSentence : function reverseIt( str ) {
    var reversedArr = [];
    var splitStr = str.split(' ')
    if(splitStr.length > 1) {
      for (var i = 0; i = splitStr.length; i++) {
        var word = splitStr.shift()
        reversedArr.unshift(word)
      }
      var reversed = "'" + reversedArr.toString() + "'"
      var exp = /\,/g
      var newStr = reversed.replace(exp," ")
      console.log(newStr);
      return newStr
    }
    if(splitStr.length < 2) {
      return splitStr.toString()
    }
  }
}


func.reverseSentence( 'I am testing this string.' )
func.reverseSentence( 'string.' )
func.reverseSentence( '123' )

module.exports = { func }

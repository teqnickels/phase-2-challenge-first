var func = {
  reverseSentence : function reverseIt( str ) {
    var reversedArr = [];
    var splitStr = str.split(' ')
    if(splitStr.length == 1) {
      return splitStr.toString()
    }else{
      for (var i = 0; i < splitStr.length; i++) {
        console.log('i---->',i);
        var word = splitStr.shift()
        console.log('shifted word ----->', word);
        reversedArr.unshift(word)
      }
      var reversed = "'" + reversedArr.toString() + "'"
      var exp = /\,/g
      var newStr = reversed.replace(exp," ")
      return newStr
    }
  }
}

func.reverseSentence( 'I am testing this string.' )
func.reverseSentence( 'string.' )
func.reverseSentence( '123' )

module.exports = { func }

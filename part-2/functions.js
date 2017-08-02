var func = {
  reverseSentence : function reverseIt( str ) {
    if(typeof(str) !== 'string') {
      return 'invalid input'

     }
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

      return newStr
    }
    if(splitStr.length < 2) {
      return "'" + splitStr.toString() + "'"
    }
  }
}

func.reverseSentence(3432423432)
module.exports = { func }

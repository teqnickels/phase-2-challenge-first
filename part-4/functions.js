var filter = {
  filterBetween : function filterIt(array, min, max) {
    if (Object.prototype.toString.call( array ) !== '[object Array]') {
      return 'Invalid input'
    }
    if (typeof(min) !== 'string' || typeof(max) !== 'string') {
      console.log('NOPE');
      return 'Invalid Input'
    }
    var newArr = [min, max];
    var joinedArr = array.concat (newArr)
    joinedArr.sort()
    var finalArr = joinedArr.slice( joinedArr.indexOf(min)+1, joinedArr.indexOf(max))
    return finalArr
  }
}



module.exports = { filter }

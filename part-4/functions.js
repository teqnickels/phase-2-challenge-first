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

let arr1 = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']

filter.filterBetween(arr1, 'deer', 'giraffe')// => ['dog']
filter.filterBetween(arr1, 'chimp', 'lobster')// => ['dog', 'lion', 'cow']
filter.filterBetween(arr1, 'chickadee', 'chimpanzee') // => []
filter.filterBetween(2, 'chickadee', 'chimpanzee') // => []
filter.filterBetween(2, 2, 2) // => 'Invalid Input'

module.exports = { filter }

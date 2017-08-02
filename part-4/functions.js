var filter = {
  filterBetween : function filterIt(array, min, max) {
    var newArr = [min, max];
    var joinedArr = array.concat (newArr)
    joinedArr.sort()
  var finalArr = joinedArr.slice( joinedArr.indexOf(min)+1, joinedArr.indexOf(max))
    console.log(finalArr);
  }
}

let arr1 = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']

filter.filterBetween(arr1, 'deer', 'giraffe')// => ['dog']
filter.filterBetween(arr1, 'chimp', 'lobster')// => ['dog', 'lion', 'cow']
filter.filterBetween(arr1, 'chickadee', 'chimpanzee') // => []

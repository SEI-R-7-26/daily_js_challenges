function intersection(arr1, arr2) {
  let result = []
  for (i = 0; i < arr2.length; i ++) {
    for (j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        result.push(arr2[i])
        break
      }
    }
  }
  return result
}

intersection(['a', 1], []) //=> []
intersection(['a', 1], [true, 'a', 15]) //=> ['a']
intersection([1, 'a', true, 1, 1], [true, 1, 'b', 1]) //=> [1, true, 1]
function mergeObjects(obj1, obj2) {
  let result = {}
  if (arguments.length == 1) result = arguments[0]
  for (i = 0; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      result[key] = (arguments[i])[key]
    }
  }
  console.log(result)
  return result
}

mergeObjects({}, {a: 1});
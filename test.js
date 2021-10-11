function toCamelCase(string) {
  let newString = ''
  for (let i = 0; i < string.length; i++) {
    console.log(string.charAt(i))
    if (string.charAt(i) !== '_' && string.charAt(i) !== '-') {
      if (string.charAt(i - 1) === '_' || string.charAt(i - 1) === '-') {
        newString = newString + string.charAt(i).toUpperCase()
      } else {
        newString = newString + string.charAt(i)
      }
    }
    console.log(newString)
  }
}

toCamelCase('Mama-mia')

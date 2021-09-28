function toCamelCase(string) {
  let newStr = string
  for (i = 0; i < newStr.length; i++){
    if (newStr[i] === '-') {
      newStr = newStr.replace('-', '')
      newStr = newStr.slice(0,i) + newStr.charAt(i).toUpperCase() + newStr.slice(i+1)
    }
    else if (newStr[i] === '_') {
      newStr = newStr.replace('_', '')
      newStr = newStr.slice(0,i) + newStr.charAt(i).toUpperCase() + newStr.slice(i+1)
    }
  }
  console.log(newStr)
  return newStr
}

toCamelCase( 'sei' ) // => 'sei'
toCamelCase( 'sei-rocks' ) // => 'seiRocks'
toCamelCase( 'banana_Turkey_potato' ) // => 'bananaTurkeyPotato'
toCamelCase( 'Mama-mia' ) // => 'MamaMia'
toCamelCase( 'A_b_c' ) // => 'ABC'
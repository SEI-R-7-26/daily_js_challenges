function toCamelCase(string) {
  let newStr = string.toLowerCase()
  for (i = 0; i < newStr.length; i++){
    if (newStr[i] === '-') {
      newStr = newStr.replace('-', '')
    }
    else if (newStr[i] === '_') {
      newStr = newStr.replace('_', '')
    }
  }
  console.log(newStr)
}

toCamelCase( 'sei' ) // => 'sei'
toCamelCase( 'sei-rocks' ) // => 'seiRocks'
toCamelCase( 'banana_Turkey_potato' ) // => 'bananaTurkeyPotato'
toCamelCase( 'Mama-mia' ) // => 'MamaMia'
toCamelCase( 'A_b_c' ) // => 'ABC'
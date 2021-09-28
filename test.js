function countTheBits(int) {
  let bits = 0
  let binaryString = int.toString(2).split('')
  for (i = 0; i < binaryString.length; i++){
    if (binaryString[i] === '1')
      bits += 1
  }
  return bits
}

countTheBits( 0 ) // => 0
countTheBits( 13 ) // => 3
countTheBits( 256 ) // => 1
countTheBits( 255 ) //=> 8
countTheBits( 65535 )  //=> 16 
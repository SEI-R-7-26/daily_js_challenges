function hammingDistance(str1, str2) {
  if (str1.length !== str2.length) return NaN
  let count = 0
  for (i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) count += 1
  }
  console.log(count)
  return count
}

hammingDistance('!!!!', '****')
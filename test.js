function isPrime(n) {
  let result = false
  if (n <= 1 || !Number.isInteger(n)) result = false
  for (i = 2; i < n+1; i++) {
    if (n % i == 0) { 
      return false
    }
  }
  result = true
  return result
}

isPrime(4) //=> true
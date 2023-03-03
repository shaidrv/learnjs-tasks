// 1
function getMaxSubSum(arr) {
  let maxSum = 0

  for (let i = 0; i < arr.length; i++) {
    let sumFromI = 0
    for (j = i; j < arr.length; j++) {
      sumFromI += arr[j]
      maxSum = Math.max(maxSum, sumFromI)
    }
  }

  return maxSum
}

// 2
function getMaxSubSum(arr) {
  let maxSum = 0
  let subSum = 0

  for (let item of arr) {
    subSum += item
    maxSum = Math.max(maxSum, subSum)
    if (subSum < 0) subSum = 0
  }

  return maxSum
}

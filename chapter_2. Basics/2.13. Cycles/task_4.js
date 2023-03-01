let n = 10
label: for (i = 2; i <= n; i++) {
  for (j = 2; j < i; j++) {
    if (i % j === 0) continue label
  }
  alert(i)
}

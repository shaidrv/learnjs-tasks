function readNumber() {
  let number

  do {
    number = prompt('Введите число', '')
  } while (!isFinite(number))

  if (number === nul || number === '') return null

  return +number
}

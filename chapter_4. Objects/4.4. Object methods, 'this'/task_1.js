let calculator = {
  read() {
    this.firstValue = +prompt('Введите первое значение', '')
    this.secondValue = +prompt('Введите второе значение', '')
  },
  sum() {
    return this.firstValue + this.secondValue
  },
  mul() {
    return this.firstValue * this.secondValue
  },
}

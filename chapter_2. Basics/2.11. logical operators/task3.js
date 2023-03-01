let login = prompt('Введите Ваш логин', '')
if (login === 'Админ') {
  let password = prompt('Введите Ваш пароль', '')
  if (password === 'Я главный') {
    alert('Здравствуйте!')
  } else if (password === null || password === '') {
    alert('Отменено')
  } else {
    alert('Неверный пароль')
  }
} else if (login === '' || login === null) {
  alert('Отменено')
} else {
  alert('Я Вас не знаю')
}

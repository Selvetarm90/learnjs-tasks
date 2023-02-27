let login = prompt('Введите логин', '');
if (login === null) {
  alert('Отменено');
}
else if (login === 'Админ') {
  let password = prompt('Введите пароль', '');
  if (password === null) {
    alert('Отменено');
  } else if (password === 'Я Главный') {
    alert('Здравствуйте!');
  } else alert('Неверный пароль');
} else alert('Я вас не знаю');

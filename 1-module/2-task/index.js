/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
 function isValid(name) {
     if (undefined == name){
     return false;
   }
   for (let char of name) {
     if (char === ` `) {
       return false;
     }
   }
   if (name.length < 4){
     return false;
   }
   return true;
 }

function sayHello() {
  const userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
sayHello('user');

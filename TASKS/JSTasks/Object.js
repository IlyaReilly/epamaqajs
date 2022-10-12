// Создать объект car, добавить к нему свойство color со значением 'черный'
// Изменить свойство color объекта car на 'зеленый'
// В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя

let car = {
    color: 'черный'
}

car.color = 'зеленый';

car.power = (power) => {
    console.log('мощность двигателя: ' + power + ' лошадиных сил');
}

car.power(213);

// На склад принимают груши и яблоки, напишите функцию, которая возвращает результат сложения количества принятых груш и яблок

let sum = (pear, apple) => {
    console.log('Принято груш: ' + pear + ', принято яблок: ' + apple + '. Всего принято: ' + (pear + apple) + ' фруктов');
}
sum(12,22);

// В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в терминале
// (если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)

const prompt = require('prompt-sync')();
const checkname = prompt('Ваше имя? - ');
let name = 'Ilya';
if (checkname == name) {
        console.log('привет, ' + name)
    } else {
            console.log('нет такого имени')
        }

//  Напишите функцию вычисления типа аргумента и вывод типа в консоль

function typearg (arg) {
    console.log(typeof(arg));
}

typearg(2);

// Напишите функцию, которая определяет является ли число простым или нет

function isSimple(num) {

let Simple = true;

for (let i = 2; i < num; i++) {
	if (num % i == 0) {
		Simple = false;
	}
}
console.log(Simple);
}
 
isSimple(13);

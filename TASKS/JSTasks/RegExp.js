// Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярное выражение, 
// которое найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'

let str = 'ahb acb aeb aeeb adcb axeb';
let res = str.match(/a.b/g);
console.log(res);


// Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные

let str1 = '2+3 223 2223';
let res1 = str1.match(/2.3/);
console.log(res1);


// Получить день, месяц и год текущей даты и по отдельности вывести в консоль

let date = new Date();

console.log('Число: ' + date.getDate());
console.log('Месяц: ' + date.getMonth());
console.log('Год: ' + date.getFullYear());





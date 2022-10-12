// //Дан массив состоящий из названий фильмов, выполните перебор массива с выводом 
// в консоль названия каждого фильма

let movies = ['Fight Club', 'Limitless', '8 mile'];
for (let movie of movies) {
    console.log(movie)
}
// Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив

let cars = ['Porsche', 'Subaru', 'Ford'];
let str = cars.join(', ');
console.log(str);
cars = str.split(',');
console.log(cars);

// Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello

let names = ['Lisa', 'Nick', 'Elijah'];
for (let i = 0; i < names.length; i++) {
    names[i] = 'Hello, ' + names[i];
}
console.log(names);

// Преобразовать числовой массив в Boolean
// как я понял, необходимо преобразовать и вывести каждый элемент массива, ведь логическое преобразование хоть какого массива (как объекта) будет возвращать true

let NtoB = [1,0,7,8,3,4,5,6];
for (let i = 0; i < NtoB.length; i++) {
  NtoB[i] = Boolean(NtoB[i]);
}
console.log(NtoB);



// Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию

let hightolow = [1,6,7,8,3,4,5,6];

hightolow.sort((a, b) => b - a);

console.log(hightolow);

// Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3

let h3 = [1,6,7,8,3,4,5,6].filter((value) => value > 3);
console.log(h3);


// Написать функцию, которая принимает два параметра - массив и число и 
// выводит индекс элемента массива равный числу

let Arr = [1,2,3,4,5,6,7,8,9];

function f(array,num) {
  array = array.indexOf(num);
  
  console.log(`число ${num} находится на позиции ${array+1}`)
}


f(Arr,2);



// Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10

for (let x = 20; x >= 10; x--) {
  console.log(x);
}




// Реализовать цикл, который выводит в консоль простые числа


Simple:
for (let n = 2; n < 30; n++) { 

  for (let j = 2; j < n; j++) { 
    if (n % j == 0) continue Simple; 
  }

  console.log(n); 
}
		

// Реализовать цикл, который выводит в консоль нечетные числа


for (let i = 1; i < 30; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
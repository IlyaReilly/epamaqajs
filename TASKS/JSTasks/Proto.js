// Создать 2 объекта: animal и cat, объект animal добавить 
// свойство move, объект cat должен наследовать свойство move

let animal = {
move: true
}

let cat = {
    __proto__: animal
}

console.log(cat.move);
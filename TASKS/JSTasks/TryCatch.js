// В try catch конструкцию завернуть код: console.log(a), let a = 3. И вывести ошибку – ‘let перед использованием нужно объявить’.


try {
    console.log(a);
    let a = 3;
}

catch {
console.log('let перед использованием нужно объявить');
}


// При выполнении 1/0  выводить ошибку 'на ноль делить нельзя'

try {
res = 1 / 0;
if (res != undefined) {
    throw new SyntaxError('на ноль делить нельзя');
}
}

catch (err) {
console.log(err.message);

}

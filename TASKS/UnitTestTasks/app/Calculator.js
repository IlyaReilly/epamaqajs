class Calculator {
    constructor() {

    };

add(a,b) {
    let sum = a + b;
    if (typeof sum !== "number") {
      throw new Error('Variable is not of type "Number"');
    } else {
        return sum;
    }
    
};
multiply(a,b) {
    let res = a * b;
    if (typeof res !== "number") {
        throw new Error(`Variable is not of type "Number"`);
      } else {
          return res;
}
}
};


module.exports = Calculator;    
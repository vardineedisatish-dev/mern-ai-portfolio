function processArray(array,operation){
          return array.map(operation);
}

function double(x){
        return x*2;
}

function square(x){
     return x*x;
}

const number=[1,2,3,4,5];

console.log("original numbers:",number);
console.log("double value:",processArray(number,double));
console.log("square value:", processArray(number,square));


function createCounter(){
    let count=0;
<<<<<<< HEAD
=======
    
>>>>>>> 95be7c06c9a041152661844fe903c15c424aec0c
    return{
         increment : function(){
            count++;       
            return count;
         },
         decrement : function(){
            count--;
            return count;
         },
         reset : function(){
            count=0;
            return count;
         }
    };
}

const counter=createCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
<<<<<<< HEAD
=======

>>>>>>> 95be7c06c9a041152661844fe903c15c424aec0c


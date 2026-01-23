let sal=50000;
let rent=10000;
let groceries=8000;
let EMI=5000;
let travel=2000;

function calucBudget(sal,rent,groceries,emi,travel){
    let totalexp=rent+groceries+emi+travel;
    let remain=sal-totalexp;
    return remain;
}

let savings= calucBudget(sal,rent,groceries,EMI,travel);

console.log("savings after expenses is: "+savings)
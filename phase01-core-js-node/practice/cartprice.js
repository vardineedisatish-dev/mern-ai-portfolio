let itemprice=1200;
let qnt=3;
let discount=0.2;
let tax=0.18;

function caluclulateFinalPrice(itemprice, qnt, discount, tax){
    let totalprice=itemprice * qnt;
    let price=totalprice * discount;
    total =totalprice - discount;
    let taxamount = total* tax;
    total = total +taxamount;
    return total;
}
let finalprice= caluclulateFinalPrice(itemprice, qnt,discount,tax);
console.log("final price is : "+finalprice);



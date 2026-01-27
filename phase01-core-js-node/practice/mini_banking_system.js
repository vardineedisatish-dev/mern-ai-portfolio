let bankName="smart bank"
let intrest=7.2;

let customers=[
    {id:1, name: "ajay", balance: 50000},
    {id:2, name: "vijay", balance: 75000},
    {id:3, name: "asha", balance: 630000}
]

function deposit(id,amount){
    let customer=customers.find(c=>c.id==id);
    if(customer){
        customer.balance+=amount;
        console.log("deposite successfully.new balance is : "+customer.balance);
    }
}
function withdraw(id,amount){
    let customer=customers.find(c=>c.id==id);
    if(customer){
        if(customer.balance>=amount){
            customer.balance-=amount;
            console.log("withdraw is successful.new balance is:"+customer.balance);
        }
        else
        {
            console.log("insufficien balance");
        }
    }
}
function checkbalance(id){
    let customer=customers.find(c=> c.id==id);
    if(customer)
    {
        console.log("your balance is : "+customer.balace);
    }
}
function calcintrest(id){
    let customer=customers.find(c=> c.id==id);
    if(customer)
    {
        let intrestamount=(customer.balance*intrest)/100;
        console.log("your intrest amount is: " +intrestamount)
    }
}

deposit(2,20000);
withdraw(2,20000);
checkbalance(3);
calcintrest(2);

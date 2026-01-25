let restName="unique restarent";
let tax=0.1;
let menu=[
    {id:1,name:"biryani", price:280},
    {id:2, name:"friderice", price:200},
    {id:3, name: "chapathi", price:50}
]

let orders=[];

function addItem(id,qtn){
    let item=menu.find(m=> m.id==id);
    if(item){
        orders.push({...item,qtn});
        console.log("item added sucessfully");
    }
}

function removeItem(id){
    orders=orders.filter(o=>o.id!=id);
    console.log("item removed successfully");
}
function totalBill(){
    subtotal=orders.reduce((sum,o)=> sum + (o.price*o.qtn),0);
    let taxamount=subtotal*tax;
    let total=subtotal+taxamount;
    console.log(`subtotal: ${subtotal}, taxamount: ${taxamount}, total: ${total}`);
    return total;
}
addItem(1,2);
addItem(2,1);
totalBill();
removeItem(2);
totalBill();

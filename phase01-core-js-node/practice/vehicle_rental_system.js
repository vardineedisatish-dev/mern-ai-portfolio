let company="QuickRide";
let dailyRent=1000;

let vehicles=[
    {id:1, vehicle:"audi",available: "true"},
    {id:2, vehicle:"bike", available: "true"},
    {id: 3, vehicle:"Tata", availeble: "true"}
]

let rent=[];

function rentVehicle(id,name,days){
    let vehicle=vehicles.find(v => v.id==id);
    if(vehicle && vehicle.available){
        vehicle.available=false;
        let cost=days*dailyRent;
        rent.push({name, vehicle:vehicles.vehicle,days,cost});
        console.log(`${name} taken a ${vehicle.vehicle} for ${days}days for price of ${cost}`);
    }
    else{
        console.log("vehicle is not available");
}
}

function returnVehicle(id){
   let vehicle=vehicles.find(v => v.id==id);
   if(vehicle){
    vehicle.available=true;
    console.log(`${vehicle.vehicle} is returned and now available`);
   }
}

function showVehicle(){
    
    console.log("available vehicles are: ");
    console.table(vehicles);
}

rentVehicle(1,"satish",5);
rentVehicle(2,"raju",10);
returnVehicle(2);
showVehicle();

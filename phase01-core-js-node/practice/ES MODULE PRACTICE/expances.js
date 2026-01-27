let expanses =[];

export function addExpanse(name,amount,categeory){
    expanses.push({name,amount,categeory});
}

export function getexpanse(){
    return expanses;
}
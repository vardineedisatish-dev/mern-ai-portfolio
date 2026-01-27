import { getexpanse } from "./expances.js";

 export function caluculateexpanses(){
    return getexpanse().reduce((sum,exp)=>sum+exp.amount,0);
}

export function calucexpcateogy(category){
    return getexpanse().filter(exp => exp.categeory==category).reduce((sum,exp) => sum+exp.amount,0);

}



import { caluculateexpanses,calucexpcateogy } from "./exp_caluc.js";

export function printReport(){
    console.log("Expenses Report")
    console.log("Total Expenses: "+caluculateexpanses());
    console.log("Food: "+calucexpcateogy("food"));
    console.log("Transport: "+calucexpcateogy("transport"));
    console.log("Entertainment: "+calucexpcateogy("entertainment"));
}


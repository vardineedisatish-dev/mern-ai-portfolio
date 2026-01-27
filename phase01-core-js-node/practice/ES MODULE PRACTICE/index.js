import { addExpanse } from "./expances.js";
import { printReport } from "./report.js";

addExpanse("Lunch", 200, "food");
addExpanse("Bus Ticket", 50, "transport"); 
addExpanse("Movie", 300, "entertainment"); 
addExpanse("Groceries", 500, "food");

printReport();
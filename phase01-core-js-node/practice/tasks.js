const fs = require("fs");
const FILE = "tasks.json";

function loadTasks() {
    try {
        const data = fs.readFileSync(FILE, "utf-8");
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

function saveTasks(tasks) {
    fs.writeFileSync(FILE, JSON.stringify(tasks, null, 2));
}

function addTask(task) {
    const tasks = loadTasks();
    tasks.push({ id: tasks.length + 1, task });
    saveTasks(tasks);
    console.log(`Task added: "${task}"`);
}

function listTasks() {
    const tasks = loadTasks();
    if (tasks.length === 0) {
        console.log("No tasks found");
    } else {
        console.log("Your Tasks:");
        tasks.forEach(t => {
            console.log(`${t.id}. ${t.task}`);
        });
    }
}

const command = process.argv[2];
const input = process.argv[3];

if (command === "add") {
    if (!input) {
        console.log("Please provide a task to add.");
    } else {
        addTask(input);
    }
} else if (command === "list") {
    listTasks();
} else {
    console.log("Unknown command. Use 'add <task>"); }
    
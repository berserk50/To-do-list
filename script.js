
import { addTask } from "./components/addTask.js";
const btn = document.querySelector('[data-form-btn]');
import { displayTasks } from "./components/readTasks.js"; 


//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);
displayTasks();

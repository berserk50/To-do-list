import { uniqueDates } from '../services/date.js';
import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTasks } from './readTasks.js';

export const addTask = (evento)=>{
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector("[data-form-date]")
    const list = document.querySelector('[data-list]');

    const value = input.value;
    const date = calendar.value;
    // moment es la libreria para cambiar el formato de el calendario
    const dateFormat = moment(date).format("DD/MM/YYYY");

    input.value = '';
    calendar.value = "";

    const complete = false;

    if( value ==="" || date=== ""){
        return;
    }
    const taskObj = {
        value,
        dateFormat,
        complete,
        id: uuid.v4()
    }

    list.innerHTML = "";
    // el JSON.parse devuelve el valor string a uno utilizable para la función para local storage ("task")  || [] significa en caso de tasks seea null o este vacio darle un arreglo vacio 
    const taskList = JSON.parse(localStorage.getItem("tasks"))|| [];
    taskList.push(taskObj);
    localStorage.setItem("tasks", JSON.stringify(taskList));

        displayTasks();
  
  }
  

export const createTask = ({value, dateFormat, complete, id}) => {
    const task = document.createElement('li');
        task.classList.add('card');
   
    const taskContent = document.createElement('div');

    const check = checkComplete(id);
    
    if(complete){
        check.classList.toggle('fas');
        check.classList.toggle('completeIcon');
        check.classList.toggle('far');
    }

    const titleTask = document.createElement('span');
            titleTask.classList.add('task');
            titleTask.innerText = value;
            taskContent.appendChild(check);
            taskContent.appendChild(titleTask);
    // task.innerHTML = content;
    // investiga span ya que estas aquí, es un atributo de HTML
    const dateElement = document.createElement("span");
            dateElement.innerHTML = dateFormat;
  
    // lo de abajo lo agrega a la barra
            task.appendChild(taskContent);
            task.appendChild(dateElement)
            task.appendChild(deleteIcon(id));
    return task;
  };
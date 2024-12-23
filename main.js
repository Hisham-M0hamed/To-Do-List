
const submitTask =document.querySelector('.submitTask');
const inputTask = document.querySelector('.inputTask');
let tasks=[];
const taskList =document.querySelector('.task-list');

const addTask =() =>{
    const text = inputTask.value.trim();
    if(text){
        tasks.push({text: text,completed: false});
        inputTask.value = '';
        updateTaskList();
    }// console.log(tasks);
}

const toggleTestComplete =(index) =>{
    tasks[index].completed =!tasks[index].completed;
    updateTaskList();
}
const deleteTask = (index) =>{
    tasks.splice(index, 1);
    updateTaskList();
}

const editTask =(index) =>{
    inputTask.value = tasks[index].text;
    tasks.splice(index, 1);
    updateTaskList();
};

const updateTaskList =()=>{
    taskList.innerHTML='';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
        <div class="taskItem">
            <div class="task ${task.completed? 'completed' : ''}">
                <span >${index+1} - </span>
                <p>${task.text}</p>
            </div>
            
            <div class="icons">
                <i class="fa-solid fa-pen-to-square" onClick="editTask(${index})" ></i>
                <i class="fa-solid fa-delete-left" onClick="deleteTask(${index})"></i>
            </div>
        </div>
        `;

        li.addEventListener('change', ()=>toggleTestComplete(index));
        taskList.append(li);
    });
}
submitTask.addEventListener('click',function(e) {
    e.preventDefault();

    addTask();
});

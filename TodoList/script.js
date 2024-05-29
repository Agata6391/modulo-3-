document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });
    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const taskText = newTaskInput.value.trim();
            if (taskText) {
                addTask(taskText);
                newTaskInput.value = '';
            }
        }
    });
    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });
        li.addEventListener('click',()=>{
            li.classList.toggle('completed');
        });
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    };






});          
const toggleModeBtn = document.getElementById('toggleMode');
const addTaskBtn = document.getElementById('addTask');
const input = document.getElementById('input');
const taskList = document.getElementById('taskList');

toggleModeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark'); 
    toggleModeBtn.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
});

addTaskBtn.addEventListener('click', () => {
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.className = 'flex items-center justify-between p-3 bg-gray-200 rounded-md dark:bg-gray-700';

   
    const taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.value = taskText;
    taskInput.readOnly = true;
    taskInput.className = 'flex-grow bg-transparent border-none focus:outline-none dark:text-white';
    li.appendChild(taskInput);


    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none';
    editBtn.addEventListener('click', () => {
        if (taskInput.readOnly) {
            taskInput.readOnly = false;
            editBtn.textContent = 'Save';
        } else {
            taskInput.readOnly = true;
            editBtn.textContent = 'Edit';
        }
    });
    li.appendChild(editBtn);


    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    input.value = '';
    input.focus();
});

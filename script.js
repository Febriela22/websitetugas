let tasks = [];
let editIndex = -1;

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Tugas tidak boleh kosong!');
        return;
    }

    if (editIndex > -1) {
        tasks[editIndex] = taskValue;
        editIndex = -1;
    } else {
        tasks.push(taskValue);
    }

    taskInput.value = '';
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit';
        editButton.onclick = () => editTask(index);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.onclick = () => deleteTask(index);

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

function editTask(index) {
    const taskInput = document.getElementById('taskInput');
    taskInput.value = tasks[index];
    editIndex = index;
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
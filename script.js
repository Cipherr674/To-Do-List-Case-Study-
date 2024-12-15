
const submitButton = document.getElementById('submit');


function redirectToMainPage() {
    window.location.href = 'main.html';
}

submitButton?.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '12345') {
        redirectToMainPage();
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

//JSON FILE FETCHING
let completedCount = 0;

async function fetchTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await response.json();

        const todoListContainer = document.getElementById('todo-list');
        if (!todoListContainer) return;

        todos.forEach(todo => {
            const todoItem = document.createElement('div');
            todoItem.className = 'form-check';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'form-check-input';
            checkbox.checked = todo.completed;

            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    completedCount++;
                } else {
                    completedCount--;
                }

                if (completedCount === 5) {
                    alert('Congrats. 5 Tasks have been Successfully Completed');
                }
            });

            const label = document.createElement('label');
            label.className = 'form-check-label';
            label.textContent = todo.title;

            todoItem.appendChild(checkbox);
            todoItem.appendChild(label);
            todoListContainer.appendChild(todoItem);
        });
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}


if (document.getElementById('todo-list')) {
    fetchTodos();
}

//Logout
function logout() {
    window.location.href = 'index.html';
}

// UNCHECK
function uncheckAll() {
    const checkboxes = document.querySelectorAll('#todo-list .form-check-input');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });


    completedCount = 0;
}

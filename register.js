// // const myForm = document.querySelector('#register__form');
// // const myFormInputName = myForm.querySelector('#nameInput');
// // const myFormInputSurname = myForm.querySelector('#userNameInput');
// // const myFormInputUsername = myForm.querySelector('#passworInput');
// // const myFormInputParol = myForm.querySelector('#confiremPassworInput');
// // const mybtn = document.querySelector('#registerBtn');

// // myForm.addEventListener('submit', function(event) {
// //     event.preventDefault(); // Saqlashni to'xtatish

// //     if (
// //         myFormInputName.value.length >= 8 &&
// //         myFormInputSurname.value.length >= 8 &&
// //         myFormInputUsername.value.length >= 8 &&
// //         myFormInputParol.value.length >= 8
// //     ) {
// //         console.log('Malumotlar tog`ri kiritilgan ');
// //     } else {
// //         console.log('Xatolik: Inputlardan biri yoki bir necha 8 ta harf yoki undan kam kirilgan');
// //         event.preventDefault(); // Xodisani to'xtatish
// //     }
// // });

// // mybtn.addEventListener('click', function() {
// //     const validInputs = [];
// //     if (myFormInputName.value.length >= 8) {
// //         validInputs.push(`Name: ${myFormInputName.value}`);

// //     }
// //     if (myFormInputSurname.value.length >= 8) {
// //         validInputs.push(`Surname: ${myFormInputSurname.value}`);
// //     }
// //     if (myFormInputUsername.value.length >= 8) {
// //         validInputs.push(`Username: ${myFormInputUsername.value}`);
// //     }
// //     if (myFormInputParol.value.length >= 8) {
// //         validInputs.push(`Password: ${myFormInputParol.value}`);
// //     }

// //     if (validInputs.length > 0) {
// //         const outputDiv = document.createElement('div');
// //         outputDiv.innerHTML = validInputs.join('<br>');
// //         document.body.appendChild(outputDiv);
// //     }
// // });
// const myForm = document.querySelector('#register__form');
// const myFormInputName = myForm.querySelector('#nameInput');
// const myFormInputSurname = myForm.querySelector('#userNameInput');
// const myFormInputUsername = myForm.querySelector('#passworInput');
// const myFormInputParol = myForm.querySelector('#confiremPassworInput');
// const mybtn = document.querySelector('#registerBtn');

// myForm.addEventListener('submit', function(event) {
//     event.preventDefault(); // Saqlashni to'xtatish

//     if (
//         myFormInputName.value.length >= 8 &&
//         myFormInputSurname.value.length >= 8 &&
//         myFormInputUsername.value.length >= 8 &&
//         myFormInputParol.value.length >= 8
//     ) {
//         console.log('Malumotlar tog`ri kiritilgan');
//     } else {
//         console.log('Xatolik: Inputlardan biri yoki bir necha 8 ta harf yoki undan kam kirilgan');
//         event.preventDefault(); // Xodisani to'xtatish

//         // Inputlarni qizil rangga o'zgartiramiz
//         if (myFormInputName.value.length < 8) {
//             myFormInputName.style.border = '2px solid red';
//         }
//         if (myFormInputSurname.value.length < 8) {
//             myFormInputSurname.style.border = '2px solid red';
//         }
//         if (myFormInputUsername.value.length < 8) {
//             myFormInputUsername.style.border = '2px solid red';
//         }
//         if (myFormInputParol.value.length < 8) {
//             myFormInputParol.style.border = '2px solid red';
//         }
//     }
// });

// mybtn.addEventListener('click', function() {
//     const validInputs = [];
//     if (myFormInputName.value.length >= 8) {
//         validInputs.push(`Name: ${myFormInputName.value}`);
//     }
//     if (myFormInputSurname.value.length >= 8) {
//         validInputs.push(`Surname: ${myFormInputSurname.value}`);
//     }
//     if (myFormInputUsername.value.length >= 8) {
//         validInputs.push(`Username: ${myFormInputUsername.value}`);
//     }
//     if (myFormInputParol.value.length >= 8) {
//         validInputs.push(`Password: ${myFormInputParol.value}`);
//     }

//     if (validInputs.length > 0) {
//         const outputDiv = document.createElement('div');
//         outputDiv.innerHTML = validInputs.join('<br>');
//         document.body.appendChild(outputDiv);
//     }
// });
const todoForm = document.querySelector('#register__form');
const nameInput = document.getElementById('#nameInput');
const firstnameInput = document.getElementById('#userNameInput');
const ageInput = document.getElementById('#passworInput');
const todoList = document.getElementById('#confiremPassworInput');
const addTodoButton = document.getElementById('#registerBtn');

addTodoButton.addEventListener('click', addTodo);

function addTodo() {
    const jinsInput = document.querySelector('input[name="Jinsi"]:checked');

    const todo = {
        name: nameInput.value,
        firstname: firstnameInput.value,
        age: parseInt(ageInput.value),
        jins: jinsInput ? jinsInput.value : ''
    };

    if (!isValidInput(todo)) {
        alert('Iltimos barcha maydonlarni to`ldiring.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = `Name: ${todo.name}, Firstname: ${todo.firstname}, Age: ${todo.age}, Jinsi: ${todo.jins}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        listItem.remove();
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        const updatedTodos = todos.filter(item => item.name !== todo.name && item.firstname !== todo.firstname);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    });

    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);

    saveTodoData(todo);
}

function isValidInput(todo) {
    return todo.name && todo.firstname && todo.age && todo.jins;
}

function saveTodoData(todo) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodoData() {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${todo.name}, Firstname: ${todo.firstname}, Age: ${todo.age}, Jinsi: ${todo.jins}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            todos.splice(index, 1);
            localStorage.setItem('todos', JSON.stringify(todos));
            loadTodoData();
        });

        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
    });
}

loadTodoData();
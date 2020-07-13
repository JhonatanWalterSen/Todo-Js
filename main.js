const todos = [];
const render = () => {
    const todoList = document.getElementById('todo-list')
        // todoList.innerHTML= '';
        // for (let i = 0; i < todos.length; i++) {
        //     todoList.innerHTML += '<li>' + todos[i] +'</li>';
        // }
    const todosTemplate = todos.map(t => '<li>' + t +'</li>');
    todoList.innerHTML = todosTemplate.join(''); //join toma todos los elementos y los junta
    const elementos = document.querySelectorAll('#todo-list li');
    elementos.forEach((elemento, i) => {
        console.log(elemento,i);
        elemento.addEventListener('click',() => {
            elemento.parentNode.removeChild(elemento)
            todos.splice(i,1);
            render()
        })
    })
}
window.onload = () => { 
   const form = document.getElementById('todo-form')
   form.onsubmit = (e) => {
       e.preventDefault();
        const todo = document.getElementById('todo')
        const todoText = todo.value;
        todo.value = '';
        todos.push(todoText)
            // console.log(todos)
        const todoList = document.getElementById('todo-list')
        // todoList.innerHTML= '';
        // for (let i = 0; i < todos.length; i++) {
        //     todoList.innerHTML += '<li>' + todos[i] +'</li>';
        // }
        const todosTemplate = todos.map(t => '<li>' + t +'</li>');
        todoList.innerHTML = todosTemplate.join(''); //join toma todos los elementos y los junta
            // console.log(todosTemplate);
        const elementos = document.querySelectorAll('#todo-list li');
        elementos.forEach((elemento, i) => {
            console.log(elemento,i);
            elemento.addEventListener('click',() => {
                elemento.parentNode.removeChild(elemento)
                todos.splice(i,1)
                render()
            })
        })
   }
}
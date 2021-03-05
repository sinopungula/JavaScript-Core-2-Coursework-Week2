function todoList(todos) {
  let content = document.querySelector( '#content')
  let list = document.createElement('ul');
  content.appendChild(list);

  
  todos.forEach((todo) => {
    let listItem = document.createElement('li');
    listItem.innerText = todo.todo;
    list.appendChild(listItem);

    listItem.addEventListener('click', strike);
    function strike(){
      if (listItem.style.textDecorationLine === 'line-through') {
        listItem.style.textDecorationLine = 'initial';
      } else {
      listItem.style.textDecorationLine = 'line-through';
    } console.log(list)
  }

  })

}

const todos = [
  {todo: 'wash the dishes'}, 
  {todo: 'walk the dog'}, 
  {todo: 'learn javascript'}, 
  {todo: 'go shopping'}
];

todoList(todos);
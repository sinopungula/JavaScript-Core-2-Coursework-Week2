function shoppingList(arrayOfPeople) {
  // let div = document.createElement('div');
  // console.log(div)
  let div = document.getElementById('content'); 
 

  let list = document.createElement('ul')
  list.appendChild(div)
  list.innerHTML = 'shopping';
  console.log(div)

  shopping.forEach( el => {
    let listItem = document.createElement('li')
    listItem.innerText = el;
    list.appendChild(listItem)
    console.log(listItem)
  })


}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);

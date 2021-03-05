function readingList(books) {
  const div = document.getElementById('content');

  for ( let i = 0; i < books.length ; i++ ) {
    let list = document.createElement('ul')
    let listItem = document.createElement('li');
    let para = document.createElement('p');

    div.appendChild(list);
    list.appendChild(listItem);
    listItem.appendChild(para);
    para.innerText = `${books[i].title} by ${books[i].author}`;
    
    if (books[i].alreadyRead === true) {
      para.style.backgroundColor = 'red';
    }
    else {para.style.backgroundColor = 'green';}
    console.log(content)
  }
// console.log(readingList)
}

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true
  }
];

readingList(books);
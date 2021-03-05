function listOfNames(arrayOfPeople) {
  let content = document.querySelector('#content');

  for(let i = 0; i < arrayOfPeople.length; i++) {

   let headingEl= document.createElement('h1');

   headingEl.innerHTML=arrayOfPeople[i].name;
   console.log(headingEl);
   content.appendChild(headingEl);

   let heading2El=document.createElement('h2');
   heading2El.innerHTML=arrayOfPeople[i].job;
   console.log(heading2El)
   content.appendChild(heading2El)
  }



}

let people = [
  { name: 'Chris', job: 'Teacher' },
  { name: 'Joanna', job: 'Student' },
  { name: 'Boris', job: 'Prime Minister' },
];

listOfNames(people);




//blue button 
var blueButton = document.getElementById('blueBtn');

blueButton.addEventListener("click", () => {
  var newJumbo = document.querySelector('.jumbotron');
    newJumbo.style.backgroundColor = '#588fbd';
    var bikeButton = document.querySelector('.buttons .btn');
    bikeButton.style.backgroundColor = '#ffa500';


}) 

var volunteerButton = document.querySelectorAll('.a.btn.btn-secondary.btn-lrg');
console.log('volunteer', volunteerButton);
   //volunteerButton.style.backgroundColor = '#588fbd';
// volunteerButton.style.backgroundColor = 'black';

//orange button
var orangeButton = document.getElementById('orangeBtn');

orangeButton.addEventListener("click", () => {
    var newJumbo = document.querySelector('.jumbotron');
    newJumbo.style.backgroundColor = '#f0ad4e';
    var bikeButton = document.querySelector('.buttons .btn');
    bikeButton.style.backgroundColor = '#5751fd';
})
//green button
    
var greenButton = document.getElementById('greenBtn');

greenButton.addEventListener("click", () => {
  var newJumbo = document.querySelector('.jumbotron');
    newJumbo.style.backgroundColor = '#87ca8a';
    var bikeButton = document.querySelector('.buttons .btn');
    bikeButton.style.backgroundColor = 'black';

})

     //--------------------------------------------part2------------


     var submitButton = document.querySelector("form button");
console.log('submit:', submitButton);
submitButton.style.backgroundColor = 'black';

submitButton.addEventListener('click', () => {
   var formFill = document.querySelectorAll(".form-group");
for (var i = 0; i < formFill.length; i++) {
    formFill[i].style.backgroundColor = '#87ca8a';
    if (formFill[i].value > 0 && formFill[0].includes('@')) {
        alert('thank you');
    } else formFill[i].style.backgroundColor = 'red';
};
   event.preventDefault();
})
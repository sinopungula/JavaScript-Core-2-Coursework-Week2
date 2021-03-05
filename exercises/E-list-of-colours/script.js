function listOfColours(colours) {

  let content = document.getElementById('content');
  let selectionDrop = document.createElement('select');
  let para = document.createElement('p');

  for (let color of colours) {
    let colorDrop = document.createElement('option');
    colorDrop.textContent = color;

    selectionDrop.appendChild(colorDrop);
  }

  selectionDrop.addEventListener('change', function () {
    para.textContent = `You have selected ${selectionDrop.value}!`;
    para.style.color = `${selectionDrop.value}`;
  });

  content.appendChild(para);
  content.appendChild(selectionDrop);

}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);

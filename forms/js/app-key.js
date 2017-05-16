const volume = document.querySelector('input[name="volume"]');
const box = document.querySelector('.box');

function addElement(parent) {
}

function getVolume() {
  let child = document.createElement('p');
  child.textContent = volume.name + ": " + volume.value;
  box.appendChild(child);
}

volume.addEventListener('change', getVolume);

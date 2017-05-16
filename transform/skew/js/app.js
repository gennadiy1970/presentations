const inputs = document.querySelectorAll('.one');
const inputs2 = document.querySelectorAll('.two');
const units = document.querySelectorAll('.units input');
const image = document.querySelector('#image');
let x = 1;
let y = 1;
let suffix = 'deg';

function handleUpdate() {
  image.style.transform = `${this.name}(${this.value}${suffix})`;
}

function handleUpdate2() {
  if (this.name == 'skewX') {
    x = this.value;
  }
  if (this.name == 'skewY') {
    y = this.value;
  }
  image.style.transform = `skew(${x}${suffix}, ${y}${suffix})`;
}

function setStep() {
  units.forEach(i => {
    if (i.checked) {
      let step = 1;
      suffix = i.value;

      switch (suffix) {
        case 'turn':
          step = 0.01;
          break;
        case 'rad':
          step = 0.02;
          break;
        case 'grad':
          step = 5;
          break;
        case 'deg':
          step = 1;
          break;
      }
      inputs.forEach(elem => elem.setAttribute('step', step));
      inputs2.forEach(elem => elem.setAttribute('step', step));
    }
  });
}

inputs.forEach(i => i.addEventListener('change', handleUpdate));
inputs2.forEach(i => i.addEventListener('change', handleUpdate2));
units.forEach(i => i.addEventListener('change', setStep));

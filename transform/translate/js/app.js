const inputs  = document.querySelectorAll('.controls input');
const inputs1  = document.querySelectorAll('.controls .one');
const inputs2 = document.querySelectorAll('.two');
const units = document.querySelectorAll('.units input');
const image = document.querySelector('#image');
let x = 0;
let y = 0;
let suffix = 'px';

function handleUpdate() {
  console.log(`${this.name}(${this.value}${suffix})`);
  image.style.transform = `${this.name}(${this.value}${suffix})`;
}


function handleUpdate2() {
  if (this.name == 'translateX') {
    x = this.value;
  }
  if (this.name == 'translateY') {
    y = this.value;
  }
  console.log(`translate(${x}${suffix}, ${y}${suffix})`);
  image.style.transform = `translate(${x}${suffix}, ${y}${suffix})`;
}

function setStep() {
  units.forEach(i => {
    if (i.checked) {
      let step = 1;
      suffix = i.value;

      switch (suffix) {
        case 'px':
          step = 1;
          break;
        case 'em':
          step = 0.01;
          break;
        case 'rem':
          step = 0.01;
          break;
        case '%':
          step = 0.01;
          break;
      }
      inputs.forEach(elem => elem.setAttribute('step', step));
      // inputs2.forEach(elem => elem.setAttribute('step', step));
    }
  });
}

inputs1.forEach(i => i.addEventListener('change', handleUpdate));
inputs2.forEach(i => i.addEventListener('change', handleUpdate2));
units.forEach(i => i.addEventListener('change', setStep));

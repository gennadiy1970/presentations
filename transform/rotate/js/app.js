const inputs = document.querySelectorAll('.controls input');
const units = document.querySelectorAll('.units input');
const image = document.querySelector('#image');
let suffix = 'deg';

function handleUpdate() {
  image.style.transform = `${this.name}(${this.value}${suffix})`;
}

inputs.forEach(i => i.addEventListener('change', handleUpdate));
units.forEach(i => i.addEventListener('change', function() {
        units.forEach(i => {
              if (i.checked) {
                let step = 1;
                suffix = i.value;

                switch (suffix) {
                  case 'turn':
                    step = 0.01;
                    break;
                  case 'rad':
                    step = 0.2;
                    break;
                  case 'grad':
                    step = 5;
                    break;
                  case 'deg':
                    step = 1;
                    break;
                }
                inputs.forEach(elem => elem.setAttribute('step', step));
}})}));

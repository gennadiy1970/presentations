const inputs = document.querySelectorAll('.one');
const inputs2 = document.querySelectorAll('.two');
const image = document.querySelector('#image');
let x = 1;
let y = 1;

function handleUpdate() {
  image.style.transform = `${this.name}(${this.value})`;
}

function handleUpdate2() {
  console.log(`${this.name}(${this.value});`);
  if ( this.name == 'scaleX') { x = this.value; }
  if ( this.name == 'scaleY') { y = this.value; }
  image.style.transform = `scale(${x}, ${y})`;
}

inputs.forEach(i => i.addEventListener('change', handleUpdate));
inputs2.forEach(i => i.addEventListener('change', handleUpdate2));
// inputs.forEach(i => i.addEventListener('change', handleUpdate));
// input.addEventListener('change', handleUpdateTwo));

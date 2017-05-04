var op = document.getElementById('op');
var bl = document.getElementById('bl');
var middle = document.getElementById('middle');
var op_trigger = 0;
var bl_trigger = 0;

op.addEventListener('click', function () {
  op_trigger = (op_trigger == 0) ? 1 : 0;
  if (op_trigger == 0) {
    middle.style.cssText = 'opacity: 0;';
    // bl_trigger = 0;
  }else {
    middle.style.cssText = 'opacity: 1;';
  }
  console.log('op_trigger = ', op_trigger);
  console.log('bl_trigger = ', bl_trigger);
});

bl.addEventListener('click', function () {
  bl_trigger = (bl_trigger == 0) ? 1 : 0;
  if (bl_trigger == 0) {
    middle.style.cssText = 'display: none;';
    // op_trigger = 0;
  }else {
    middle.style.cssText = 'display: block;';
  }
  console.log('op_trigger = ', op_trigger);
  console.log('bl_trigger = ', bl_trigger);
});

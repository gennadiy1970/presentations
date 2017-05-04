let parent = document.querySelector('.wrapper');
let child = `<h1><a href="index2.html">Next</a></h1>
<h2> hsl(color, 50%, <em class="bold">10-90%</em>)</h2>
`;
let item = 12;


while (item) {
  --item;
  child +=  `
  <div class="box box${item}">
    <span>&nbsp;</span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
  </div>
  `;
}
console.log(child);
parent.innerHTML = child;

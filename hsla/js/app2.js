let parent = document.querySelector('.wrapper');
let child = `<h1><a href="index.html">Previously</a></h1>
<h2> hsl(color, <em class="bold">10-90%</em>, 50%)</h2>
`;
let item = 12;


while (item) {
  --item;
  child +=  `
  <div class="box box${item}w">
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
parent.innerHTML = child;

require('aframe');

const light1 = document.getElementById('light1');
const light2 = document.getElementById('light2');
const light3 = document.getElementById('light3');
const light4 = document.getElementById('light4');

const getColor = () => `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
setInterval(() => {
  light1.setAttribute('animation', `property: color; to: ${getColor}; dur: 500; easing: linear;`);
  light2.setAttribute('animation', `property: color; to: ${getColor}; dur: 500; easing: linear;`);
  light3.setAttribute('animation', `property: color; to: ${getColor}; dur: 500; easing: linear;`);
  light4.setAttribute('animation', `property: color; to: ${getColor}; dur: 500; easing: linear;`);

},500);

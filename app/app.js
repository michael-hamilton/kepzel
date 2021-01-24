require('aframe');

const light = document.getElementById('light');

setInterval(() => {
  light.setAttribute('color', `${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}`);
},1000);

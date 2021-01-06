const paragrafos =  document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const stylesBody = getComputedStyle(document.body);
const backgroundBody = stylesBody.backgroundColor;

for (let element of ps) {
    element.style.backgroundColor = backgroundBody;
    element.style.color = '#fff'
}
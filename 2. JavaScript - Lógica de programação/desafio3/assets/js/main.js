const container = document.querySelector('.container');
const paragrafo = container.querySelectorAll('p');

const style = getComputedStyle(document.body);
const background = style.backgroundColor;
const textColor = '#fff'; 

for (let i of paragrafo) {
    i.style.backgroundColor = background;
}

for (let i in paragrafo) {
    paragrafo[i].style.color = textColor;
}
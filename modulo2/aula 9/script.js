function random(min, max) {
    const r = Math.floor(Math.random() * (max - min) + min);
    return r;
}

let min = 1;
let max = 50;
let number = random(min, max);
let count = 0

while (number !== 10) {
    number = random (min, max);
    count++;
    console.log(count, number);
}
let num = undefined;

function getRandomIntNumInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    num = Math.floor(Math.random() * (max - min + 1) + min);
    return num;
}

console.log(num);

document.write(getRandomIntNumInclusive(1,3));
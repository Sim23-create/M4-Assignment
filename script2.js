let coinFlip;
let times = prompt("How many times should the loop run?");
let i = 0;

while (i < times) {
    coinFlip = Math.floor(Math.random() * 2);

    if (coinFlip === 0) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }

    i++;
}
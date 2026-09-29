let coinFlip;

let loop = prompt("How many times should the loop run?");

for (let i = 0; i < loop; i++) {
    coinFlip = Math.floor(Math.random() * 2);

    if (coinFlip === 0) {
        console.log("Heads");
    } else if (coinFlip === 1) {
        console.log("Tails");
    }
}
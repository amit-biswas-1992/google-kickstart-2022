// TC = O(1), SC = O(1)

const fs = require('fs');
const input = fs.readFileSync('coloring-game.in', 'utf8').trim().split('\n');

let currentline = 0;


let T = readline();

for(let i = 1; i <= T; i++){
    let cell = readline()
    console.log(`Case #${i}: ${solve(cell)}`);
}


function solve(cell){
    return Math.ceil((cell)/5)
}

function readline(){
    return input[currentline++];
}
const fs = require('fs');
const input = fs.readFileSync('interview prep/problem-solving/kickstart/2022/Round E/palindrome.in', 'utf8').trim().split('\n');

let currentline = 0;
let T = readline();

for(let i = 1; i <= T; i++){
    console.log(`Case #${i}: ${solve()}`);
}

function solve(){
    let length = parseInt(readline())
    let P = readline();

    console.log(length,P);
}

function readline(){
    return input[currentline++];
}
// TC=O(nlogn + nlogn), SC=O(n)


const fs = require('fs');
const input = fs.readFileSync('interview prep/problem-solving/kickstart/2022/Round E/student-mentor.in', 'utf8').trim().split('\n');

let currentline = 0;

let T = readline();

for(let i = 1; i <= T; i++){
    
    console.log(`Case #${i}: ${solve()}`);
}


function solve(){
    let studentCount = parseInt(readline())
    let students = readline().split(" ").map( x => parseInt(x))
    let result = Array(studentCount).fill(-1)

    let sorted = Array.from(students)
    sorted.sort((a,b)=> a-b)



    for(let i=0;i<students.length;i++){

        let rating = students[i]

        let left = 0, right = studentCount-1

        while(left<=right){
            let mid = left + Math.floor((right-left)/2)


            if(sorted[mid]==rating*2 || (sorted[mid]<rating*2 && (sorted[mid+1]>rating*2 || mid+1==studentCount) ) ){
                left = mid
                break
            }
            else if(sorted[mid]<rating*2){
                left = mid + 1
            }
            else{
                right = mid - 1
            }
        }

        if(students[i]==sorted[left]){
            if(left>0)
                result[i] = sorted[left-1]
        }
        else
            result[i] = sorted[left]

        

    }
    



    return result.join(" ")
}



function readline(){
    return input[currentline++];
}
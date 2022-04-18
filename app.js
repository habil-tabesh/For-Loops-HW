//Pushing 1-10 using for loop
let myArr = [];
for (let i = 1; i < 11; i++) {
    myArr.push(i);
}
console.log(myArr);


//Pushing 1-10 using while Loop
let MyArr = [];
let i = 1;
while (i <= 10) {
    MyArr.push(i);
    i++;
}
console.log(MyArr);

//Pushing odd numbers from 11-21 using for loop
let oddNums = [];
for (i = 11; i <= 21; i += 2) {
    oddNums.push(i);
}
console.log(oddNums);


//Counting backwards from 15 using for loop
let backCount = [];
for (i = 15; i != 0; i -= 1) {
    backCount.push(i);
}
console.log(backCount);


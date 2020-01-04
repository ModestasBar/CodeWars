/* 6 kyu Look and say numbers
 Starting with "1" the following lines are produced by 
"saying what you see", so that line two is "one one", 
line three is "two one(s)", line four is "one two one one".
Write a function that given a starting value as a string, 
returns the appropriate sequence as a list. 
The starting value can have any number of digits. 
The termination condition is a defined by the maximum number
 of iterations, also supplied as an argument.
*/
/*
         1
         11
         21
        1211
       111221
       312211
      13112221
     1113213211
*/
const findNumbGroups = (num) => {
    let scores = [];
    for(let i = 0; i < num.length; i++) {
        let counter = 1;
        for(let j = i; j < num.length; j++) {
            if(num[j] === num[j + 1]){
                counter++;
                i++;
            } else {
                scores.push(counter);
                break;
            }
        }
    }
    return scores;
}

const generateList = (arr) => {
    let list = [];
    let temp = 0;
    const numGroups = findNumbGroups(arr);
    for(let i = 0; i < numGroups.length; i++){
        list.push(numGroups[i] + arr[temp]);
        temp += numGroups[i];
    }
    return list.join('');
}

function lookAndSay(data,len){
    let finalList = [];
    let tempData = generateList(data);
    while(len > 0) {
        finalList.push(tempData);
        tempData = generateList(tempData);
        len--;
    }
    return finalList;
}

console.log(lookAndSay('124455', 5));
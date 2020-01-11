/*
Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always has even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
*/

const test = (arr) => {
    console.log(sortArr = arr.sort((a,b) => a - b));
}

test([12,6,10,26,3,24]);

function minSum(arr) {
    const sortArr = arr.sort((a,b) => a - b);
    const multipleNum = [];
    for(let i = 0; i < sortArr.length/2; i++) {
        multipleNum.push(sortArr[i] * sortArr[sortArr.length-1-i]);
    }
    return multipleNum.reduce((a,b) => a + b, 0);
}

/*
Alternatives:

function minSum(a) {
  return a.sort((a,b)=>a-b).reduce((s,x,i,a)=>s+x*a[a.length-i-1],0)/2
}

function minSum(arr) {
  arr.sort((a,b)=>a-b);
  if(!arr.length) return 0;
  return (arr.shift() * arr.pop()) + minSum(arr);
}
*/

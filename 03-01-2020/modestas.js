const solve = (arr) => {
    if(minVal(arr)<=1 && Math.max(...arr) > 1){
        return minVal(arr) + secondLargeVal(arr);
    }
    if(Math.max(...arr) <= 1) {
        return Math.max(...arr);
    }
    
    return Math.floor((minVal(arr) + secondLargeVal(arr) - Math.max(...arr))/2) + Math.max(...arr);
}

const minVal = (arr) => {
    const initArr = [...arr];
    return Math.min(...initArr);
}

const secondLargeVal = (arr) => {
    const initArr = [...arr];
    initArr.splice(initArr.indexOf(Math.max(...initArr)),1);
    return Math.max(...initArr);
}

console.log(solve([1,1,1]));

// solve([7,4,10]);

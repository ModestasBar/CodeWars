const maxLength = (args) => {
    return Math.max(...[...args].map(x => x.length));
}

const interleave = (...args) => {
    const tempArr = [];

    const maxArr = maxLength(args);

    const valNumb= args.length;

    for(let i = 0; i < maxArr; i++){
        for(let j = 0; j < valNumb; j++) {
            if(typeof(args[j][i]) === 'undefined'){
                tempArr.push(null);
                continue;
            }
            tempArr.push(args[j][i]);
        }
    }
    return tempArr;
}

console.log(interleave(['a','c','b', 'e'], [1,2,3,4,5]));


// console.log(maxLength([['a','c','b', 'e', 'f'], [1,2,3,4,5,6,7,8]]))
// console.log(interleave(['a','c','b'], [1,2,3]));
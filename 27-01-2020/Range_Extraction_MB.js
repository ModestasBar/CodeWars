const generateRange = (list) => {
    return `,${list[0]}-${list[list.length - 1]}`;
};

const generateSeparateNum = (list) => {
    return `,${list.join()}`;
}

function solution(list) {
    let count = 0;
    let tempArr = [];
    let tempArr1 = [];
    let result = '';
    list.forEach((val, i) => {
        tempArr1.push(val);
        if (val + 1 === list[i + 1]) {
            console.log(true);
            count++;
            console.log('1');
            if (count > 1) {
                tempArr = [...tempArr1];
                console.log(tempArr);
            }
        } else if (tempArr.length) {
            result += generateRange([...tempArr, list[i++]]);
            tempArr = [];
            tempArr1 = [];
            count = 0;
            console.log('2');
        } else {
            result += generateSeparateNum(tempArr1);
            tempArr1 = [];
            count = 0;
            console.log('3');
        }
    })

    return result.slice(1);
}

console.log(solution([1, 2, 3, 4, 9, 11, 12, 13]));
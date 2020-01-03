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
console.log(lookAndSay('1259', 5));

// console.log(generateList('1259'));

const valInterpreter = (val) => {
    let num;  
    switch(val) {
        case '1':
            num = 'one';
            break;
        case '2':
            num = 'two';
        break;
        case '3':
            num = 'three';
            break;
        case '4':
            num = 'four';
        break;
        case '5':
            num = 'five';
            break;
        case '6':
            num = 'six';
        break;
        case '7':
            num = 'seven';
            break;
        case '8':
            num = 'eight';
        break;
        case '9':
            num = 'nine';
            break;
        default:
            num = 'Invalid value'
        break;
    }
    return num;
}

// console.log(valInterpreter('9'));
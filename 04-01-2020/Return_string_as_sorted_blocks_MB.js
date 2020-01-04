/*
6 kyu Return String As Sorted Blocks
You will receive a string consisting of lowercase letters, uppercase letters and digits as input. 
Your task is to return this string as blocks separated by dashes ("-"). The elements of a block 
should be sorted with respect to the hierarchy listed below, and each block cannot contain multiple
instances of the same character.

The hierarchy is:
lowercase letters (a - z), in alphabetic order
uppercase letters (A - Z), in alphabetic order
digits (0 - 9), in ascending order

Examples
"21AxBz" -> "xzAB12" - since input does not contain repeating characters, you only need 1 block
"abacad" -> "abcd-a-a" - character "a" repeats 3 times, thus 3 blocks are needed
"" -> "" - an empty input should result in an empty outpu
*/

const blocks = (s) => {
    const loweLetter = /[a-z]/g;
    const upperLetter = /[A-Z]/g;
    const digit = /\d/g;

    if(!s.length) {
        return "";
    }
    let sortedString = filter(s, loweLetter).concat(filter(s, upperLetter)).concat(filter(s, digit, true)).join('');
    
    let sortedBlock = [];
    let test = 6;
    let temp = '';
    let tempSorted = sortedString;
    let tempVal = '';
    while(test > 0) {
        for(let i = 0; i <= tempSorted.length; i++) {
            // if(!sortedBlock.length) {
            //     sortedBlock += sortedString[0];
            //     console.log('sorted block', sortedBlock);
            //     // console.log(sortedBlock[sortedBlock.length - 1]);
            //     sortedString = sortedString.replace(sortedString[0], '');
            //     console.log('sorted string', sortedString);
            //     console.log('sorted block -1 length', sortedBlock[sortedBlock.length - 1]);
            // }
            // if(sortedBlock[sortedBlock.length - 1] != sortedString[i]) {
            //     sortedBlock += sortedString[i];
            //     sortedString = sortedString.replace(sortedString[i], '');
            // }

            const isRepeat = temp.includes(sortedString[i]);
            if(isRepeat) {
                tempVal+= sortedString[i];

                break;
            }
            temp += sortedString[i];
            console.log('temp', temp);
        }
        temp+='-';
        sortedBlock.push(temp);

        console.log('tempVal', tempVal);
        tempSorted = tempVal;
        tempVal = '';
        temp = '';
        test--;
    }
    return sortedBlock;
}

const filter = (a, reg, num=false) => {
    if(num) {
        return a.match(reg).sort((a,b) => a-b);
    }
    return a.match(reg).sort()
}


console.log(blocks("21AxxBz"));
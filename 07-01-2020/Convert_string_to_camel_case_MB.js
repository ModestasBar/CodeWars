/*
Convert string to camel case
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case).

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/


const toCamelCase = (str) => {
    if(!str.length) {
        return str;
    }

    const upperChar = str.split(/[-|_]/).map(val => val[0].toUpperCase() + val.slice(1, val.length)).join('');

    return str[0] + upperChar.slice(1, upperChar.length);
}

// console.log(toCamelCase("the-stealth_warrior"));


// Alternatives

// function toCamelCase(str){
//   return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
// }


// function toCamelCase(str){
//   return str.replace(/[_-]\w/g, ch => ch[1].toUpperCase());
// }

// console.log(toCamelCase("the-stealth_warrior"));

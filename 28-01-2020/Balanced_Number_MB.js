function balancedNum(number) {
  return number.toString().length < 3 ? "Balanced"
    : firstHalf(number) != secondHald(number) ? "Not Balanced" : "Balanced";
}

const firstHalf = (num) => {
  return num.toString().slice(0, Math.ceil(num.toString().length / 2) - 1)
    .split("")
    .reduce((r, v) => r + parseInt(v), 0);
}

const secondHald = (num) => {
  return num.toString().slice(-Math.ceil(num.toString().length / 2) + 1)
    .split("")
    .reduce((r, v) => r + parseInt(v), 0);
}



console.log(balancedNum(123));
function isVeryEvenNumber(n) {
  if (n.toString().length > 1) {
    n = n.toString();
    n = n.split('').reduce((acc, val) => acc + Number(val), 0);
    return true && isVeryEvenNumber(n);
  } else {
    return n % 2 == 0;
  }
}

console.log(isVeryEvenNumber(3));
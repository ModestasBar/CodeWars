function top3(products ,amounts, prices) {
    const pricesList = amounts.map((val, i) => val*prices[i]);
    let sortPrice = [...pricesList];
    sortPrice.sort((a,b) => a-b);

    const top3Price = sortPrice.slice(-3).reverse();

    const numbers = top3Price.map(val => pricesList.indexOf(val));
    console.log(top3Price);
    console.log(numbers);

    return numbers.map(val => products[val]);
}

console.log(top3(["Computer", "Cell Phones", "Vacuum Cleaner"], [3, 3, 3], [199, 199, 199]));


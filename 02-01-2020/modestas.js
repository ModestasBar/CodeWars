const horses = (num) => {
    if(Number.isInteger(num)) {
        if(num > 2) {    
            return (num * (num - 1) * (num - 2));
            } 
        return num;
        }
    return;        
}

console.log(horses(5));
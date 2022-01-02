const smallestAll = (...numbers) => {
    var smallest=numbers[0] 
    for(let i = 1; i < numbers.length; i++) {
        if(numbers[i]<smallest){
            smallest=numbers[i]
        }
    }
    return smallest;
    
}
let a=smallestAll(11,12,13,9);
console.log(a)


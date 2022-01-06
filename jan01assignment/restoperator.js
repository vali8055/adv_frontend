const smallestAll = (...numbers) => {
    var smallest=numbers[0] 
    for(let i = 1; i < numbers.length; i++) {
        if(numbers[i]<smallest){
            smallest=numbers[i]
        }
    }
    return smallest;
    
}

function fn(){
    let a=document.getElementById('inpfield').value
    let b=a.split(",")
    console.log(b)
    let s=smallestAll.apply(null,b)
    let c=document.getElementById('results')
    let result=document.createElement('p')
    c.appendChild(result)
    result.innerHTML=s
    console.log(result)
    }
// let a=smallestAll(11,12,13,9);
// console.log(a)


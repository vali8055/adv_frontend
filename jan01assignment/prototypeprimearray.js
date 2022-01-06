Array.prototype.prime = function () {
    let a = this.every(checkPrime)
    return a
    
    function checkPrime(n) {
        if (n == 1) {
            return false;
        }
        else if (n === 2) {
            return true;
        } else {
            for (var x = 2; x < n; x++) {
                if (n % x === 0) {
                    return false;
                }
            }
            return true;
        }
    }
}
function fn(){
let a=document.getElementById('inpfield').value
let b=a.split(",")
let s=b.prime()
let c=document.getElementById('results')
let result=document.createElement('p')
c.appendChild(result)
result.innerHTML=s
console.log(result)
}

// let arr = [2, 4, 5]
// let s = arr.prime();
// console.log(s)

// let arr1 = [2, 3, 5]
// let n = arr1.prime();
// console.log(n)



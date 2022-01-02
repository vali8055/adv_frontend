Array.prototype.prime = function () {
    let a = this.every(checkPrime)
    return a
    function checkPrime(n) {
        if (n === 1) {
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


let arr = [2, 4, 5]
let s = arr.prime();
console.log(s)

let arr1 = [2, 3, 5]
let n = arr1.prime();
console.log(n)



// Write a function called `biggest` that returns the
// biggest number in an array. If there is no biggest
// number the function should return undefined.

function biggest(number) {
    let big = number[0]
     for (let i = 0; i < number.length; i++) {
        if (number[i] > big){
        big = number[i]; 
        }
      }
    return big
    
    if (number.length === 0) {
      return undefined
    }
}
  
console.log(biggest([12, 3, 4, 567, 8]))
console.log(biggest([7, 89, 90, 2, 6]))
console.log(biggest([]))
 console.log("practice- Done by Fatima Ali ");

// Write a function called 'average' that accepts a list of
// numbers and returns the average. The average
// of an empty list should be considered zero.

  function average(array) {
    var total = 0;
    var count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}

console.log(average([1, 2, 3]))


// Write a function called `biggest` that returns the
// biggest number in an array. If there is no biggest
// number the function should return undefined.
function biggest(numArray) {
  return Math.max.apply(null, numArray);  
}
console.log(biggest([12,3,4,567,8]))
 

 

 

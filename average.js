// Write a function called 'average' that accepts a list of
// numbers and returns the average. The average
// of an empty list should be considered zero.

function average(listnumbers) {
    let sum = 0
    if (listnumbers.length > 0) {
      for (let i = 0; i < listnumbers.length; i++) {
        sum += listnumbers[i]
      }
      return sum/listnumbers.length
    } else if (listnumbers.length === 0) {
      return 0
    }
}
  
console.log(average([1, 2, 3]))
console.log(average([6, 7, 8]))
console.log(average([]))
  
console.log("practice");

// Write a function called 'average' that accepts a list of
// numbers and returns the average. The average
// of an empty list should be considered zero.
function average(arr1) {
  let arr1Length = arr1.length
  let arrAvg = 0
  let sum = 0
  if (arr1Length>0) {
    for (let i=0; i<arr1Length; i++) {
      sum += arr1[i]
    }
  } else {
    return 0
  }
  return sum/arr1Length
}
console.log(average([1, 2, 3]))
console.log(average([]))

// Write a function called `biggest` that returns the
// biggest number in an array. If there is no biggest
// number the function should return undefined.
function biggest(arr2) {
  let arr2Length = arr2.length
  let max = 0
  if (arr2Length>0) {
    max = Math.max(...arr2)
    return max
  } else {
    return undefined;
  }
}
console.log(biggest([12,3,4,567,8]))
console.log(biggest([]))

// Write a function called `urlParams` that accepts a
// string representing a URL and returns an object with
// key, value pairs for each parameter in the url string.
// If there are no URL parameters your function should
// return an empty object.
//
// Use the string methods split() to target parts of the
// string to turn into an array
// 
// URLs are strings like this:
//
// http://google.com/
// {}
// http://google.com/?q=cats
// {q: 'cats'}
// http://google.com/?q=cats&type=images
// {q: 'cats', type: 'images'}
// http://google.com/?q=cats&type=images&format=gif
// {q: 'cats', type: 'images', format: 'gif'}


function urlParams(query) {
  let arr = query.split(/[?=&]/)
  let webName = arr.shift()
  let obj = {}
  if (arr.length>0) {
    for (let n=0; n<arr.length; n+=2) {
      obj[arr[n]] = arr[(n+1)];
    }
  } else {
    obj = {}
  }
  console.log(obj)
}
console.log(urlParams("http://google.com/"))
console.log(urlParams("http://google.com/?q=cats"))
console.log(urlParams("http://google.com/?q=cats&type=images"))
console.log(urlParams("http://google.com/?q=cats&type=images&format=gif"))
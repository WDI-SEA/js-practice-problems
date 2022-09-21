// Write a function called 'average' that accepts a list of
// numbers and returns the average. The average
// of an empty list should be considered zero.
function average(arr) {

  let sum = 0
  if (arr.length === 0) {
    return 0
  }
  else {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
    let avg = sum / arr.length
    return avg
  }
}
console.log(average([1, 2, 3]))
console.log(average([]))



// Write a function called `biggest` that returns the
// biggest number in an array. If there is no biggest
// number the function should return undefined.
function biggest(arr) {
  let max = 0
  if (arr.length === 0) {
    return undefined
  }
  else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]
      }
    }
    return max
  }
}
console.log(biggest([12, 3, 4, 567, 8]))
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

  let newObj = {}
  
  //seperate the URL :
  let arr1 = query.split('?')
  //in case of no parameters in the URL:
  if(arr1.length === 1){
    return newObj
  }
    
  else {
    //array containing only the keys and values:
    let arr2 = arr1[1].split('&')

    //for loop to iterate between the pairs of key and value
    for (let i = 0; i < arr2.length; i++) {

      // seperate keys from values, now we have like an array inside an array [[0,1],[0,1],[0,1]] -> somthin like that
      let parameters = arr2[i].split('=')  
      let keyParam = parameters[0] //store zero index as a key
      let valueParam = parameters[1] //store first index as value
      
      //creates an object with keys and values
      newObj[keyParam] = valueParam  
      
    }

  return newObj
}
}

console.log(urlParams("http://google.com/"))
console.log(urlParams("http://google.com/?q=cats"))
console.log(urlParams("http://google.com/?q=cats&type=images"))
console.log(urlParams("http://google.com/?q=cats&type=images&format=gif"))
console.log("practice");

// Write a function called 'average' that accepts a list of
// numbers and returns the average. The average
// of an empty list should be considered zero.
function average(arr1) {
    if(arr1.length != 0){ 
      sum = 0
      for(let i=0; i<arr1.length; i++){
        sum = sum + arr1[i]
      }
    return sum/arr1.length
    } else{
      return undefined
    }
  }

console.log(average([1, 2, 3]))
console.log(average([]))

// Write a function called `biggest` that returns the
// biggest number in an array. If there is no biggest
// number the function should return undefined.
function biggest() {
    bigNum = arr[0]
    AbsOfDiff = 0
    sumOfDiffs = 0
    for(let n=0; n<arr.length; n++){
      if(arr[n]>bigNum){
        bigNum = arr[n]
      }
    AbsOfDiff = Math.abs(arr[n+1]-a[n])
    sumOfDiffs = sumOfDiffs + AbsOfDiff
    }
    if(sumOfDiffs !==0 ){
    return bigNum
    } else {
      return undefined
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
    fullUrl = query.split("?")
    if(fullUrl.length === 1){
      return {}
    }
    obj = {}
    params = fullUrl[1].split("&")
    for(let i=0; i<params.length; i++){
      list_keyValues = params[i].split("=")
      key = list_keyValues[0]
      value = list_keyValues[1]
      obj[key] = value
    }
      
    return obj
  }

console.log(urlParams("http://google.com/"))
console.log(urlParams("http://google.com/?q=cats"))
console.log(urlParams("http://google.com/?q=cats&type=images"))
console.log(urlParams("http://google.com/?q=cats&type=images&format=gif"))


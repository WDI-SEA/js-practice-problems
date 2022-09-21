console.log("practice");

// Write a function called 'average' that accepts a list of
// numbers and returns the average. The average
// of an empty list should be considered zero.
function average(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
}
console.log(average([1, 2, 3]))
console.log(average([]))

// Write a function called `biggest` that returns the
// biggest number in an array. If there is no biggest
// number the function should return undefined.
function biggest(arr) {

  if (arr.length === 0) {
    return undefined;
  } else {

    let biggest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > biggest) {
        biggest = arr[i];
      }
    }
    return biggest;
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
  
  //create object to store the object
  let returnedObject = {}

  //check if the url query have parameters
  let index = query.indexOf("?")

  // return an empty object
  if (index === -1){
    return returnedObject

  //return an object
  } else {

  //split the string
  let string = query.split("?")[1]

  string = string.toString()
  
  let arrStr = string.split("&")

  let key_value;

  //This loop will convert the array of key_value into object
  for (let i = 0; i < arrStr.length; i++){

    //split the arrStr into an array that has key and value
    
    key_value = arrStr[i].split("=")

    //append the key and value into an object
    returnedObject[key_value[0]] = key_value[1]
  }


    return returnedObject;
  }
}
console.log(urlParams("http://google.com/"))
console.log(urlParams("http://google.com/?q=cats"))
console.log(urlParams("http://google.com/?q=cats&type=images"))
console.log(urlParams("http://google.com/?q=cats&type=images&format=gif"))

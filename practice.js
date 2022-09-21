console.log("practice");

// Write a function called 'average' that accepts a list of
// numbers and returns the average. The average
// of an empty list should be considered zero.
function average(arr) {
  let avg = 0;
  let sum = 0;
  arr.forEach(item => {
    sum += item;
  });
  if (arr.length > 0) {
    avg = sum / arr.length;
  }
  return avg;
}
console.log(average([1, 2, 3]))
console.log(average([]))

// Write a function called `biggest` that returns the
// biggest number in an array. If there is no biggest
// number the function should return undefined.
function biggest(arr) {
  let maxNum = 0;
  if (arr.length > 0) {
    arr.forEach(item => {
      if (item > maxNum) {
        maxNum = item;
      }
    });
    return maxNum;
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
  let obj = {};
  // let thereAreQueries = false;
  if (query.split('?')[1]) {
    let arr = query.split('?')[1].split('&');
    arr.forEach(item => {
      let newItem = item.split('=');
      obj[newItem[0]] = newItem[1];
    });
    return obj;
  }else {
      return obj = {};
    }
}
console.log(urlParams("http://google.com/"))
console.log(urlParams("http://google.com/?q=cats"))
console.log(urlParams("http://google.com/?q=cats&type=images"))
console.log(urlParams("http://google.com/?q=cats&type=images&format=gif"))


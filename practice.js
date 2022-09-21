console.log("practice");

// Write a function called 'average' that accepts a list of
// numbers and returns the average. The average
// of an empty list should be considered zero.
arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
function Average(array) {
    var total = 0;
    var count = 0;
    array.forEach(function(item, index) {
        total += item;
        count++;
    });
    return total / count;
}
console.log(Average(arry));

// Write a function called `biggest` that returns the
// biggest number in an array. If there is no biggest
// number the function should return undefined.
function biggest(arr) {
  var longestNumber = -Infinity;
 for (var i = 0; i < arr.length; i++) {
   if (typeof arr[i] === 'number') {
     if (arr[i] > longestNumber) {
       longestNumber = arr[i];
     }
   }
 }
 if (longestNumber == -Infinity) {
   longestNumber = 0;
 }
  return longestNumber;
}
var output1 = biggest([3, 10, 5, 20, 3, 1]);
console.log(output1);

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
  let urlString = 
"https://github.com/Hussain-ai?tab=repositories";
        let paramString = urlString.split('?')[1];
        let queryString = new URLSearchParams(paramString);
        for(let pair of queryString.entries()) {
            console.log("Key is:" + pair[0]);
            console.log("Value is:" + pair[1]);
        }
}
console.log(urlParams("http://google.com/"))
console.log(urlParams("http://google.com/?q=cats"))
console.log(urlParams("http://google.com/?q=cats&type=images"))
console.log(urlParams("http://google.com/?q=cats&type=images&format=gif"))


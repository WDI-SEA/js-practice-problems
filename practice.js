console.log("practice");

// Write a function called 'average' that accepts a list of
// numbers and returns the average. The average
// of an empty list should be considered zero.

function average(list) {
  if (list.length === 0) {
    return 0
  }
  var sum = 0
  for (let i = 0; i < list.lenght; i++) {
    sum + list [i]
  }
  return sum / list.length;
}


console.log(average([1, 2, 3 ,500, 54, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]))
console.log(average([]))

// Write a function called `biggest` that returns the
// biggest number in an array. If there is no biggest
// number the function should return undefined.

function biggest(lest) {
  if (list.length === 0) {
    return undefined;
  }
  var biggest = list[0];
  for (var i = 0; i < list.length; i++) {
    if (list[i] > biggest) {
      biggest = list[i];
    }
  }
  return biggest
}
console.log(biggest([12, 3, 4, 567, 8]))
console.log(biggest([]))
// http://google.com/
// {}
// http://google.com/?q=cats
// {q: 'cats'}
// http://google.com/?q=cats&type=images
// {q: 'cats', type: 'images'}
// http://google.com/?q=cats&type=images&format=gif
// {q: 'cats', type: 'images', format: 'gif'}

function urlParams(query) {
  var url = query.split(`?`);
  if (url.length === 1) {
    return {};
  }
  var params = url[1].split(`&`)
  var obj = {};
  for (var i = 0; i < params.length; i++) {
    var keyVal = params[i].split(`=`)
    obj[keyVal[0]] = keyVal[1];
  }
}
return obj;
}
console.log(urlParams("http://google.com/"))
console.log(urlParams("http://google.com/?q=cats"))
console.log(urlParams("http://google.com/?q=cats&type=images"))
console.log(urlParams("http://google.com/?q=cats&type=images&format=gif"))

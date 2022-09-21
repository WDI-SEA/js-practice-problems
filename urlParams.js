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
    let url = query.split('?')
    if (url.length ===1 ){
      return {}
    }
    let parameter = url[1].split('&')
    let object = {}
    for (let i=0; i < parameter.length; i++){
      let key = parameter[i].split('=')
      object [key[0]] = key [1]
       
    }
    
    return object
}
  
  
console.log(urlParams("http://google.com/"))
console.log(urlParams("http://google.com/?q=cats"))
console.log(urlParams("http://google.com/?q=cats&type=images"))
console.log(urlParams("http://google.com/?q=cats&type=images&format=gif"))
console.log(urlParams("https://github.com/shaikhaalbflasa/js-practice-problems"))
  
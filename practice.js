
// Write a function called 'average' that accepts a list of
// numbers and returns the average. The average
// of an empty list should be considered zero.
function average(arr) {
  let sum =0 ;
  sum =arr.reduce((num1,num2)=> num1+num2)
  return sum/arr.length
}
function biggest(arr) {
let biggest = 0;
for (let i=0;i<arr.length;i++){
  if(arr[i]>biggest){
    biggest = arr[i]
    
  }else if(biggest == arr[i] && i==arr.length-1){
    return undefined;

  }
  
}
return biggest;
}

let urlParams = (urlString) =>{
  let urlObj = {}
  if(!urlString.includes("=")){
    return "doesn't contain any parameters"
  }else{
    let test = urlString.split("&")
    test = test.map(element => element.split("="))
    test [0][0]= test[0][0][test[0][0].length-1]
    urlObj =  Object.fromEntries(test)
return urlObj
  }
    

}

console.log(urlParams("http://google.com/"))


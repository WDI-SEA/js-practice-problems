function biggest(num) {
  //Spread syntax ...
  if(Math.max(...num) === -Infinity){
    //param supplied is empty hence returning undefined!
    return undefined
  } else if (num.length === 1){
    //if only one number is supplied
  return "Undefined - No biggest number to compare with !"
  } else{
      return Math.max(...num) 

  }
  }

  console.log(biggest([12, 3, 4, 567, 8]))
  console.log(biggest([7, 89, 90, 2, 6,120]))
  console.log(biggest([100]))
let average = (arr) =>  {
    let sum = 0
    for(i=0; arr.length ; i++) {
       let sum = sum + arr[i]
    }
    avg = sum / arr.length 
    return avg 
      
    arr = []
    return undefined;
  }
  
  
  console.log(average([1, 2, 3]))
  console.log(average([]))

  
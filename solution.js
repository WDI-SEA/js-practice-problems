let average = (arr) =>  {
    if (arr.length === 0) {
      return undefined;
    }
    let sum = 0
    for(let i=0; arr.length ; i++) {
       sum+= arr[i]
    }
    avg = sum / arr.length 
    return avg 
  }
  
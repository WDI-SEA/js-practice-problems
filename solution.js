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
  




  let biggestNum = (bigger) => {
    let larg = bigger[i]
    for (let i=0 ; i<bigger.length; i++) {
      if ( larg > bigger[i]) {
        larg = bigger[i] 
      }
    }
  
    return larg 
  
  }
  
  if (bigger.length === 0) {
    return undefined
  }
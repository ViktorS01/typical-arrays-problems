function max (arr){
  if ( arr === undefined || arr.length === 0){
    return 0;
  }
  let max = arr[0];
  for (let v of arr){
    if (max <= v){
      max = v;
    }
  }
  return max;
}

function min (arr){
  if ( arr === undefined || arr.length === 0){
    return 0;
  }
  let min = arr[0];
  for (let v of arr){
    if (min >= v){
      min = v;
    }
  }
  return min;
}

function avg (arr){
  if ( arr === undefined || arr.length === 0){
    return 0;
  }
  let res = 0;
  for (let v of arr){
    res += v;
  }
  return res / arr.length;
}
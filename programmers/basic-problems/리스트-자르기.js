function listSlice(num_list, start, end, interval = 1) {
  const arr = [];

  for(let i = start; i < end; i += interval) {
    arr.push(num_list[i]);
  }

  return arr;
}

function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;
  
  if(n === 1) {
    return listSlice(num_list, 0, b + 1);
  } else if(n === 2) {
    return listSlice(num_list, a, num_list.length);
  } else if(n === 3) {
    return listSlice(num_list, a, b + 1);
  } else {
    return listSlice(num_list, a, b + 1, c);
  }
}
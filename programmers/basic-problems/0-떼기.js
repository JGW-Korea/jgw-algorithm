function solution(n_str) {
  for(let i = 0; i < n_str.length; i++) {
    if(n_str[i] === "0") continue;
    return n_str.slice(i);
  }
}
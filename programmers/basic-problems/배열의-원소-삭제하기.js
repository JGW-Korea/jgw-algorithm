function solution(arr, delete_list) {
  return arr.filter(el => !delete_list.includes(el));
}

// --------------------------------------------------

// function includes(arr, target) {
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === target) {
//       return true;
//     }
//   }

//   return false;
// }

// function solution(arr, delete_list) {
//   const answer = [];

//   for(let i = 0; arr.length; i++) {
//     if(!includes(delete_list, arr[i])) {
//       answer.push(arr[i]);
//     }
//     // if(!delete_list.includes(arr[i])) {
//     //   answer.push(arr[i]);
//     // }
//   }

//   return answer;
// }
// 일반 버블 정렬
function bubbleSort(arr) {
	const copyArr = [ ...arr ];
	
	// 첫 번째 반복문은 전체 정렬 과정에서 각 패스를 수행한다.
  for(let i = 0; i < copyArr.length - 1; i++) {
		// 두 번째 반복문은 서로 인접한 두 원소를 비교하여 교환하며 정렬을 진행한다.
    for(let j = 0; j < copyArr.length - 1; j++) {
      // 정렬 기준 -> 오름차순
      if(copyArr[j] > copyArr[j + 1]) {
        [copyArr[j], copyArr[j + 1]] = [copyArr[j + 1], copyArr[j]];
      }

      // 정렬 기준 -> 내림차순
      // if(copyArr[j] < copyArr[j + 1]) {
      //  [copyArr[j], copyArr[j + 1]] = [copyArr[j + 1], copyArr[j]];
      // }
		}
	}
	
	return copyArr;
}

// 버블 정렬 최적화 방법 #1. 교환이 발생하지 않는 경우, 정렬이 완료된 것으로 판단되어 조기 종료시키는 방식
function earlyStopBubbleSort(arr) {
  const copyArr = [ ...arr ];

  // 버블 정렬 수행
  for(let i = 0; i < copyArr.length - 1; i++) {
    let flag = false; // 교환 발생 여부를 판단하는 변수

    for(let j = 0; j < copyArr.length - 1; j++) {
      // 정렬 기준 -> 오름차순
      if(copyArr[j] > copyArr[j + 1]) {
        [copyArr[j], copyArr[j + 1]] = [copyArr[j + 1], copyArr[j]];
        flag = true;
      }

      // 정렬 기준 -> 내림차순
      // if(copyArr[j] < copyArr[j + 1]) {
      //  [copyArr[j], copyArr[j + 1]] = [copyArr[j + 1], copyArr[j]];
      // }
    }

    if(!flag) break;
  }

  return copyArr;
}

// 버블 정렬 최적화 방법 #2. 이미 정렬된 구간은 비교에서 제외하는 방식
function excludeBubbleSort(arr) {
  const copyArr = [ ...arr ];

  // 버블 정렬 수행
  for(let i = 0; i < copyArr.length - 1; i++) {
    for(let j = 0; j < copyArr.length - 1 - i; j++) {
      // 정렬 기준 -> 오름차순
      if(copyArr[j] > copyArr[j + 1]) {
        [copyArr[j], copyArr[j + 1]] = [copyArr[j + 1], copyArr[j]];
      }

      // 정렬 기준 -> 내림차순
      // if(copyArr[j] < copyArr[j + 1]) {
      //  [copyArr[j], copyArr[j + 1]] = [copyArr[j + 1], copyArr[j]];
      // }
    }
  }

  return copyArr;
}

// 버블 정렬 알고리즘 최적화 방법을 모두 적용한 형태의 버블 정렬 알고리즘
function compressBubbleSort(arr) {
  const copyArr = [...arr];

  for(let i = 0; i < copyArr.length - 1; i++) {
    let flag = false; // 교환 발생 여부를 판단하는 변수

    for(let j = 0; j < copyArr.length - 1 - i; j++) {
      if(copyArr[j] > copyArr[j + 1]) {
        [copyArr[j], copyArr[j + 1]] = [copyArr[j + 1], copyArr[j]];
        flag = true;
      }

      // if(copyArr[j] < copyArr[j + 1]) {
      //   [copyArr[j], copyArr[j + 1]] = [copyArr[j + 1], copyArr[j]];
      //   flag = true;
      // }
    }

    if(!flag) break;
  }

  return copyArr;
}

const unsortedArr = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000) + 1);
const sortedArr = Array.from({ length: 10000 }, (_, idx) => idx + 1);

console.time("bubbleSort(unsorted)");
bubbleSort(unsortedArr);
console.timeEnd("bubbleSort(unsorted)");

console.time("earlyStopBubbleSort(unsorted)");
earlyStopBubbleSort(unsortedArr);
console.timeEnd("earlyStopBubbleSort(unsorted)");

console.time("excludeBubbleSort(unsorted)");
excludeBubbleSort(unsortedArr);
console.timeEnd("excludeBubbleSort(unsorted)");

console.time("compressBubbleSort(unsorted)");
compressBubbleSort(unsortedArr);
console.timeEnd("compressBubbleSort(unsorted)");

// ------------

console.time("bubbleSort(sorted)");
bubbleSort(sortedArr);
console.timeEnd("bubbleSort(sorted)");

console.time("earlyStopBubbleSort(sorted)");
earlyStopBubbleSort(sortedArr);
console.timeEnd("earlyStopBubbleSort(sorted)");

console.time("excludeBubbleSort(sorted)");
excludeBubbleSort(sortedArr);
console.timeEnd("excludeBubbleSort(sorted)");

console.time("compressBubbleSort(sorted)");
compressBubbleSort(sortedArr);
console.timeEnd("compressBubbleSort(sorted)");
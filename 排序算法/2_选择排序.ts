const arr = [1, 4, 2, 8, 5, 7, 6, 3];
//

function selectionSort(arr: number[]) {
  const arrL = arr.length;

  for (let i = 0; i < arrL - 1; i++) {
    let arrMinIndex = i;
    let temp = 0;
    for (let j = i + 1; j < arrL; j++) {
      if (arr[arrMinIndex] > arr[j]) {
        arrMinIndex = j;
      }
    }

    temp = arr[i];
    arr[i] = arr[arrMinIndex];
    arr[arrMinIndex] = temp;
  }

  return arr;
}

console.log(selectionSort(arr));

export {};

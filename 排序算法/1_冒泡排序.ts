const arr = [1, 4, 2, 8, 5, 7, 6, 3];

function bubbleSort(arr: number[]) {
  const arrL = arr.length;
  for (let i = 0; i < arrL - 1; i++) {
    for (let j = 0; j < arrL - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }

      console.log(arr);
    }
  }

  return arr;
}

console.log(bubbleSort(arr));

export {};

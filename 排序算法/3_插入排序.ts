const arr = [1, 4, 2, 8, 5, 7, 6, 3];

function insertionSort(arr: number[]) {
  const arrL = arr.length;
  for (let i = 1; i < arrL; i++) {
    let j = i - 1;
    let temp = arr[i];

    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }

  return arr;
}

console.log(insertionSort(arr));

export {};

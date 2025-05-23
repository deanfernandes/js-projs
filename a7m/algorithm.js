function binarySearch(a, t) {
  if (a === null) throw new Error("array is null");

  let l = 0;
  let r = a.length - 1;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (a[m] < t) l = m + 1;
    else if (a[m] > t) r = m - 1;
    else return m;
  }
  return -1;
}

function bubbleSort(a) {
  const sortedA = [...a];
  const n = sortedA.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (sortedA[i - 1] > sortedA[i]) {
        swap(sortedA, i - 1, i);
        swapped = true;
      }
    }
  } while (swapped);

  return sortedA;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

module.exports = { binarySearch, bubbleSort };

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

module.exports = binarySearch;

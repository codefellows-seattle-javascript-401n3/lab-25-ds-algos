module.exports = function bs(val, arr) {
  if(!arr.length) return false;

  let mid = Math.floor(arr.length/2);
  let current = arr[mid];

  if (val === current) return true;

  if(val < current) {
    let newArray = arr.slice(0, mid);
    return bs(val, newArray);
  } else {
    let newArray = arr.slice(mid + 1, arr.length);
    return bs(val, newArray);
  }
};

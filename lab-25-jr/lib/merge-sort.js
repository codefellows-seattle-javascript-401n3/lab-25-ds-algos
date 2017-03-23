module.exports = function mergeSort(array) {
  if(array.length <= 1) return array;

  let left = mergeSort(array.slice(0, array.length / 2));
  let right = mergeSort(array.slice(array.length / 2, array.length));

  return merge(left, right);

  function merge(left, right) {
    let newArray = [];

    while(left.length && right.length) {
      if(left[0] < right[0]) {
        newArray.push(left.shift());
      } else {
        newArray.push(right.shift());
      }
    }

    if(left.length){
      newArray = newArray.concat(left);
    } else {
      newArray = newArray.concat(right);
    }

    return newArray;
  }
};

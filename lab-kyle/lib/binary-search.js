module.exports = function bs(value, array) {

  if (!array.length) return false

  let mid = Math.floor(array.length / 2)
  let curr = array[mid]

  if (value === curr) return true

  if (value < curr) {
    let newArray = array.slice(0, mid)
    return bs(value, newArray)
  } else {
    let newArray = array.slice(mid + 1, array.length)
    return bs(value, newArray)
  }
}

// let array = [1,2,3,4,5]
// let test1 = bs(0, array)
// let test2 = bs(2, array)
// let test3 = bs(5, array)
// let test4 = bs(6, array)
// console.log(test1)
// console.log(test2)
// console.log(test3)
// console.log(test4)

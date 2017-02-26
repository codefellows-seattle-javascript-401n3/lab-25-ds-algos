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

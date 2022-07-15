// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// Examples
// moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  let zero = [];
  let array = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === 0) {
      zero.push(arr[i]);
    } else array.push(arr[i]);
  }

  return array.concat(zero);
}

function moveZeros(arr) {
  let array = arr.filter((x) => x !== 0);
  let zero = arr.filter((x) => x === 0);
  return array.concat(zero);
}

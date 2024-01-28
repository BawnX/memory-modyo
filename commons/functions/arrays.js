function shuffleArr(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function sliceArr(arr, size) {
  return arr.slice(0, size);
}

function findIndex(arr, id) {
  return arr.findIndex((el) => el.id === id);
}

export { shuffleArr, sliceArr, findIndex };

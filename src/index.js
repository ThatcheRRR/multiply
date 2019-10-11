module.exports = function multiply(first, second) {
  let arrFirst = first.split('').reverse(),
      arrSecond = second.split('').reverse(),
      arr = [];
  for (let i = 0; i < arrFirst.length; i++) {
    for (let j = 0; j < arrSecond.length; j++) {
      let temp = arrFirst[i] * arrSecond[j];
      if (arr[i + j] != undefined) {
        arr[i + j] += temp;
      } else {
        arr[i + j] = temp;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let res = arr[i] % 10;
    let change = Math.floor(arr[i] / 10);
    arr[i] = res;
    if (arr[i + 1] != undefined) {
      arr[i + 1] += change;
    } else if (arr[i + 1] == undefined && change !== 0) {
      arr[i + 1] = change;
    }
  }
  return arr.reverse().join('');
}
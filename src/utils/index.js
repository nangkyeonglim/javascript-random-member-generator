export const shuffle = (arr) => {
  const strikeOut = [];

  while (arr.length) {
    const lastIdx = arr.length - 1;
    let roll = Math.floor(Math.random() * arr.length);
    let temp = arr[lastIdx];
    arr[lastIdx] = arr[roll];
    arr[roll] = temp;
    strikeOut.push(arr.pop());
  }

  return strikeOut;
};

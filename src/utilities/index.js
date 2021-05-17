//DIVIDE BY CHUNKS
//Divide major arrays in sub arrays to create paginations
export const chunkArray = (array, value) => {
  let chunkContainer = [],
    times = array.length / value,
    arrayRest = array;
  for (let i = 0; i < times; i++) {
    let chunk = [];
    chunk = arrayRest.splice(0, value);
    chunkContainer.push(chunk);
  }
  //   console.log(chunkContainer);c
  return chunkContainer;
};

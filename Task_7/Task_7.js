function abs_summation(array){
    let sum = array.reduce((total,num) =>total+num);
    return Math.abs(sum);
}
function search(array , num){
    let index = array.indexOf(num);
    return index;
}
function transformArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
          arr.splice(i, 1, 1); 
        } else if (arr[i] < 0) {
          arr.splice(i, 1, 2); 
        }
      }
      return arr;
}
function printPositions(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 10) {
        console.log(`A[${i}] = ${arr[i]}`);
        }
    }
}
function arrayEditing(arr , numOfElements){
  let newArr = arr.filter((element) => element < 100);
  return newArr.slice(0,numOfElements) ;
}

function filterAndModify(arr){
  let newArr = arr.filter((element) => element % 2 == 0);
  return newArr.map((element)=>element*2) ;
}
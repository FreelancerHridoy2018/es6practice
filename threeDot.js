// const number1 = [12, 14, 15, 28, 77];
// const number2 = [3, 13, 16, 18];
// const number3 = [3, 13, 16, 18,97];
// // const allAge = number1.concat(number2).concat([5]).concat(number3);
 
//   const allAge = [...number1, ...number2, 5 , ...number3];

// console.log(allAge);

const bussiness = 650;
const minister = 450;
const sochib = 347;

const takapoisha = [650, 350, 347];
// const maximun = Math.max(bussiness, minister, sochib);

const maximun = Math.max(...takapoisha);
console.log(maximun);

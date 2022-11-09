//1. Знайти суму та кількість позитивних елементів.
const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let quantity = 0;
const result = array.reduce((accum, value) => {
    if (value > 0) {
        quantity++;
        accum += value;
    }
    return accum;
}, 0);
console.log(`Сумма положительных элементов равна: ${result}, их количество равно: ${quantity}.`);

// 2. Знайти мінімальний елемент масиву та його порядковий номер.
const arrayValueMin = array.slice(0);
const valueMinResult = Math.min(...arrayValueMin)
const serialValueMinResult = arrayValueMin.indexOf(valueMinResult);
console.log(`Минимальный элемент массива равен: ${valueMinResult}, а его порядковый номер равен: ${serialValueMinResult}.`)

// 3. Знайти максимальний елемент масиву та його порядковий номер.
const arrayValueMax = array.slice(0);
const valueMaxResult = Math.max(...arrayValueMax)
const serialValueMaxResult = arrayValueMax.indexOf(valueMaxResult);
console.log(`Максимальный элемент массива равен: ${valueMaxResult}, а его порядковый номер равен: ${serialValueMaxResult}.`)

// 4. Визначити кількість негативних елементів.
const arrayNegative = array.slice(0);
let quantityNegative = 0;
arrayNegative.forEach((value) => {
    if (value < 0) {
        quantityNegative++;
    }
});
console.log(`Количество отрицательных элементов равно: ${quantityNegative}.`);

// 5. Знайти кількість непарних позитивних елементів.
const arrayUnpairedPositive = array.slice(0);
let quantityUnpairedPositive = 0;
arrayUnpairedPositive.forEach((element) => {
    if (element % 2 !== 0 && element > 0) {
        quantityUnpairedPositive++;
    }
})
console.log(`Колличество непарных положительных элементов равно: ${quantityUnpairedPositive}`);

// 6.Знайти кількість парних позитивних елементів.
const arrayPairedPositive = array.slice(0);
let quantityPairedPositive = 0;
arrayPairedPositive.forEach((element) => {
    if (element % 2 === 0 && element > 0) {
        quantityPairedPositive++;
    }
})
console.log(`Колличество парных положительных элементов равно: ${quantityPairedPositive}`);

// 7.Знайти суму парних позитивних елементів.
const arrayPairedPositiveSum = array.slice(0);
const resultPairedPositiveSum = arrayPairedPositiveSum.reduce((accum, value) => {
   if (value % 2 === 0 && value > 0) {
       accum += value;
   }
   return accum;
},0);
console.log(`Сумма парных положительных элементов равна: ${resultPairedPositiveSum}`)

// 8. Знайти суму непарних позитивних елементів.
const arrayUnpairedPositiveSum = array.slice(0);
const resultUnpairedPositiveSum = arrayUnpairedPositiveSum.reduce((accum, value) => {
    if (value % 2 !== 0 && value > 0) {
        accum += value;
    }
    return accum;
},0);
console.log(`Сумма непарных положительных элементов равна: ${resultUnpairedPositiveSum}`)

// 9. Знайти добуток позитивних елементів.
const arrayPositiveMultiplication = array.slice(0);
const resultPositiveMultiplication = arrayPositiveMultiplication.reduce((accum, value) => {
    if (value > 0) {
        accum *= value;
    }
    return accum;
},1);
console.log(`Сумма непарных положительных элементов равна: ${resultPositiveMultiplication}`)

// 10. Знайти найбільший серед елементів масиву, остальні обнулити.
// Вариант с циклом.
// const arrayMax = array.slice(0);
// const elementMax = Math.max(...arrayMax);
// for (let index = 0; index < arrayMax.length; index++) {
//     if (arrayMax[index] !== elementMax) {
//         arrayMax[index] = 0;
//     }
// }
// console.log(arrayMax);

// Вариант без цикла.
const arrayMax = array.slice(0);
const elementMax = Math.max(...arrayMax);
let resultOtherElement = arrayMax.map((element) => {
    return element !== elementMax ? 0 : element;
})
console.log(resultOtherElement);
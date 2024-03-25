//* Завдання 1
// Дано масив чисел. Потрібно визначити, чи є у ньому хоча б одне від'ємне число. Якщо є, то повернути масив, в якому кожен елемент масиву буде додатнім числом.

// Вхідні дані: масив чисел.

// Вихідні дані: масив додатніх чисел або повідомлення "No negative numbers found".

// Приклад вхідних даних:
// let arr = [3, -2, 5, 6, -8, 2];

const findPositiveNumbers = (arr) => {
    const hasNegative = arr.some(num => num < 0);
    if (hasNegative) {
        return arr.map(num => num < 0 ? -num : num);
    } else {
        return "No negative numbers found";
    }
};

let arr1 = [3, -2, 5, 6, -8, 2];
console.log(findPositiveNumbers(arr1));


// Число + число
const number1 = 0.1;
const number2 = 0.2;

console.log((number1 + number2).toFixed(1));

// Рядок + число
const a = '1';
const b = 2;

const result = a + b;

console.log(result);

// Флешка
const gb = Number(prompt("Введіть обсяг флешки в ГБ:")); 

const mb = gb * 1024; 

const fileSize = 820;

const files = (mb / fileSize).toFixed(1);

alert(`На флешку ${gb } ГБ поміщається ${files} файлов розміром 820 МБ.`);

//  Шоколадка
const money = prompt('Ввести сумму которую готовы потратить');
const price = prompt('Ввести сумму одной шоколадки');
const amount = prompt('Количество шоколадок');

const totalPrice = money - price * amount;

alert(`Ваша решта = ${totalPrice.toFixed(1)} грн`);

// 3 число навпаки 
const number = prompt('Введи тризначне число:');

const last = number % 10;
const middle = (number % 100 - last) / 10;
const first = (number - number % 100) / 100;

const reversed = `${last}${middle}${first}`;
alert("Зворотне число: " + reversed);

// Вклад в банк 
const deposit = prompt('Ввести суму вкладу');

// const yearInterest = deposit * 0.05;
const totalInterest = ((deposit * 0.05 / 12) * 2).toFixed(2);

alert('Вашi нарахованi вiдстотки ' + totalInterest);

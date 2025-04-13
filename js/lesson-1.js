// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);
function clock() {
  const min = Math.floor(Math.random() * (59 - 0) + 0);

  if (min <= 15) {
    return `${min} входить в першу чверть`;
  } else if (min > 15 && min <= 30) {
    return `${min} входить в другу чверть`;
  } else if (min > 30 && min <= 45) {
    return `${min} входить в третю чверть`;
  } else {
    return `${min} входить в четверту чверть`;
  }
}
alert(clock());

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

function num(number) {
  switch (number) {
    case "1":
      return `зима`;
      break;
    case "2":
      return `весна`;
      break;
    case "3":
      return `літо`;
      break;
    case "4":
      return `осінь`;
      break;

    default:
      return `Вибачте, але ви маєте ввести значення від 1 до 4 включно`;
  }
}
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

function hours(num) {
  const hours = String(Math.floor(num / 60)).padStart(2, "0");
  const minutes = String(Math.floor(num % 60)).padStart(2, "0");
  return `$(hours):$(minutes)`;
}

const grades = [
  { name: "Макар", score: 85 },
  { name: "Денис", score: 92 },
  { name: "Анна", score: 78 },
  { name: "Даша", score: 88 },
  { name: "Студент_X", score: 45 }
];

// Задание 1: Вычисление среднего балла
function calculateAverage(data) {
  const sum = data.reduce((acc, student) => acc + student.score, 0);
  return sum / data.length;
}

// Задание 2: Поиск лучшего студента
function findTopStudent(data) {
  return data.reduce((top, student) =>
    student.score > top.score ? student : top
  ).name;
}

// Задание 3: Список должников
function filterFailed(data, passScore) {
  return data
    .filter(student => student.score < passScore)
    .map(student => student.name);
}

// Задание 4: Добавление буквенных оценок
function addLetterGrade(data) {
  return data.map(student => {
    let letter = "C";
    if (student.score >= 90) letter = "A";
    else if (student.score >= 75) letter = "B";
    return { ...student, letter: letter };
  });
}

// Итоговый вывод
console.log("--- ОТЧЕТ ПО УСПЕВАЕМОСТИ ---");
console.log(`1. Средний балл группы: ${calculateAverage(grades).toFixed(2)}`);
console.log(`2. Лучший студент: ${findTopStudent(grades)}`);
console.log(`3. Список должников (балл < 60): ${filterFailed(grades, 60).join(", ") || "нет"}`);
console.log("4. Итоговый массив с буквенными оценками:");
console.table(addLetterGrade(grades));
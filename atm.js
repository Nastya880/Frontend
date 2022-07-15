// Напишите функцию банкомат которая принимает на вход число и возвращает объект в формате  {номинал_купюры : количество_купюр}.
// Если банкомат не может выдать данную сумму, то выводится ошибка 'Incorrect value'.
// Купюры должны выдаться оптимальным образом (вместо 5 купюр номиналом 1000 выдается одна 5000).
// За раз банкомат может выдавать не более 20 купюр, если купюр для выдачи не хватает то выводится ошибка 'Limit exceeded'

function atm(sum) {
  const banknots = [5000, 2000, 1000, 500, 200, 100, 50];
  const result = [];

  if (sum % 50 !== 0) return "Incorrect value";
  if (sum > 0) {
    for (let i = 0; i < banknots.length; i++) {
      let note = banknots[i];

      while (sum - note >= 0) {
        sum -= note;
        result.push(note);
      }
    }
  }
  if (result.length > 20) return "limit exceeded";
  let map_res = {};
  let q = 1;
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== result[i + 1]) {
      map_res[result[i]] = q;
      q = 1;
    } else {
      q++;
    }
  }
  return map_res;
}

console.log(atm(8350)); // {5000 : 1, 2000 : 1, 1000 : 1, 200 : 1, 100 : 1, 50 : 1 }
console.log(atm(2570)); // Incorrect value
console.log(atm(100050)); // limit exceeded

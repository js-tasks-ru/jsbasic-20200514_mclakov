/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let s = 0;
  for (let key in salaries) {
    if (isFinite(salaries[key])) {
    s = s + salaries[key];
    }
  }
    return s;
}

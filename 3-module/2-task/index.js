/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arr = str
        .split(',')
        .join(' ')
        .split(' ')
        .filter(item => !isNaN(parseInt(item)));

  let result = {
  }
  result.min = Math.min.apply(null, arr);
  result.max = Math.max.apply(null, arr);
  return result;
}

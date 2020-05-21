/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
if (str.includes('1XbeT now')){
  return true;
};
if (str.includes('free xxxxx')){
  return true;
};
return false;
}

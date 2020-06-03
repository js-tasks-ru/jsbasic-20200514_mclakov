/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  const newUl = document.createElement('ul');
  newUl.innerHTML = friends.map(i => `<li>${i.firstName} ${i.lastName}</li>`).join('\n');
  return newUl;
}

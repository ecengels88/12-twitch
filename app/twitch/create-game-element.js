export default function createGameItem(itemOne) {
  const gridItem = document.createElement('div');
  gridItem.classList.add('game-item');

  gridItem.innerHTML = `
  <h3 class="game-item__name"></h3>
  <h4 class="game-item__popularity"></h4>
  <img src="" alt="" class="game-item__pic">
  `;

  gridItem.querySelector('.game-item__name').innerText = itemOne.name;
  gridItem.querySelector('.game-item__popularity').innerText = itemOne.popularity + ' Viewers';
  gridItem.querySelector('.game-item__pic').src = itemOne.box.large;
  gridItem.querySelector('.game-item__pic').alt = itemOne.name;

  return gridItem;
}

export default function createGameItem(itemOne) {
  const gridItem = document.createElement('div');
  gridItem.classList.add('game-item');

  gridItem.innerHTML = `
  <img src="" alt="" class="game-item__pic">
  <h3 class="game-item__name"></h3>
  <h4 class="game-item__popularity"></h4>
  `;

  gridItem.querySelector('.game-item__name').innerText = itemOne.game.name;
  gridItem.querySelector('.game-item__popularity').innerText = `${itemOne.game.popularity} Viewers`;
  gridItem.querySelector('.game-item__pic').src = itemOne.game.box.large;
  gridItem.querySelector('.game-item__pic').alt = itemOne.game.name;

  return gridItem;
}

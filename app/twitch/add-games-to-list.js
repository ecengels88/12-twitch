import createGameElement from './create-game-element';

export default function showAllResults(parentEl, data) {
  parentEl.innerHTML = '';
  // const elementObject = document.createElement('div');
  // elementObject.classList.add('game-item');
  //
  // return elementObject;

  for (let i = 0; i < data.length; i += 1) {
    const gameItem = data[i];
    const el = createGameElement(gameItem.game);

    parentEl.appendChild(el);
  }
}

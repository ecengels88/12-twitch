import createGameElement from './create-game-element';

export default function showAllResults(parentEl, data) {
  parentEl.innerHTML = '';

  for (let i = 0; i < data.length; i += 1) {
    const gameItem = data[i];
    const el = createGameElement(gameItem);

    parentEl.appendChild(el);
  }
}

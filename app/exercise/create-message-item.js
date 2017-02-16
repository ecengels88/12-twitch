export default function createMessageItem(item) {
  const element = document.createElement('li');

  element.innerHTML = `<span class="message-item__username"> ${item.username}</span> ${item.message}`;

  return element;
}

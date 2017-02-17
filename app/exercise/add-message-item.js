import createMessageItem from './create-message-item';

export default function addMessageItem(list, message) {
  const li = createMessageItem(message);

  list.appendChild(li);
};

/* eslint-env qunit */

// This is just used to allow multi-line strings
function fixWhitespace(str) {
  return str.replace(/\s+/g, ' ').trim();
}

import createMessageItem from '../../app/exercise/create-message-item';

QUnit.module('Create Message Item');

test('make qunit happy', (assert) => {
  assert.ok(true);
});

test('it creates a new message item element', (assert) => {
  const messageOne = { username: 'Ryan', message: 'Do your homework' };
  const messageTwo = { username: 'Josh', message: 'Time for standups' };

  const resultOne = createMessageItem(messageOne);
  const resultTwo = createMessageItem(messageTwo);

    // Element tag names are uppercase when looked up
  assert.equal(resultOne.tagName, 'LI', 'createMessageItem should return an `LI` element');

    // Uses the fixWhitespace helper to remove repeating whitespace
    // so you can format your HTML better
  assert.equal(fixWhitespace(resultOne.innerText), 'Ryan Do your homework',
      'createMessageItem should fill in the required data for messageOne');
  assert.equal(fixWhitespace(resultTwo.innerText), 'Josh Time for standups',
      'createMessageItem should fill in the required data for messageTwo');

  const usernameElOne = resultOne.querySelector('.message-item__username');
  const usernameElTwo = resultTwo.querySelector('.message-item__username');

  assert.ok(usernameElOne,
    'The li created by createMessageItem should contain a span with the class "message-item__username"');

  const nameOne = fixWhitespace(usernameElOne.innerText);
  const nameTwo = fixWhitespace(usernameElTwo.innerText);

  assert.equal(nameOne, 'Ryan',
    'createMessageItem should create a ".message-item__username" span filled with the username for messageOne');
  assert.equal(nameTwo, 'Josh',
    'createMessageItem should create a ".message-item__username" span filled with the username for messageTwo');
});

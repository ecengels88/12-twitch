import 'whatwg-fetch';
// Import `data.json`
import data from './data';

import addGamesToList from './twitch/add-games-to-list';

// Look up a `ul` element with a class called `results`
const ul = document.querySelector('.grid');
// Add games to the results list based on the data from `data.json`
addGamesToList(ul, data.top);

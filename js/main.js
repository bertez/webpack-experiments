var $ = require('jquery');
require('shared');

import Point from 'point';

console.log('point: ' + new Point(1,2));

let person = {
	name: 'Berto'
};

console.log(`Hello ${person.name}`);

require('./apps/' + $('script[data-start]').data('start'));
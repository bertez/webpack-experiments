import 'shared';
import $ from 'jquery';
import Reddit from 'reddit';
import extractor from 'extractor';
import Writer from 'writer';

require('../css/style.css');

let reddit = new Reddit('https://www.reddit.com/r/pics/top.json');

reddit.getImages()
    .then(extractor)
    .then(urls => new Writer($('.ui-gallery'), urls).write());

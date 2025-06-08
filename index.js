// Consts

const trending = document.getElementById('trending');

const posters = [
  'https://image.tmdb.org/t/p/original/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg',
  'https://image.tmdb.org/t/p/original/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
  'https://image.tmdb.org/t/p/original/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg',
  'https://image.tmdb.org/t/p/original/rTh4K5uw9HypmpGslcKd4QfHl93.jpg',
  'https://image.tmdb.org/t/p/original/2CAL2433ZeIihfX1Hb2139CX0pW.jpg',
  'https://image.tmdb.org/t/p/original/yF1eOkaYvwiORauRCPWznV9xVvi.jpg',
  'https://image.tmdb.org/t/p/original/jNewCbpT89zccFrc9xj5k1zjjpC.jpg',
  'https://image.tmdb.org/t/p/original/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg'
];

posters.forEach(poster => {
  const img = document.createElement('img');
  img.src = poster;
  img.alt = "Movie Poster";
  trending.appendChild(img);
});

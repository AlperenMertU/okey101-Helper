
const tiles = [
  [
    { number: 1, color: 'siyah' },
    { number: 2, color: 'siyah' },
    { number: 6, color: 'siyah' },
    { number: 7, color: 'siyah' },
    { number: 9, color: 'siyah' },
  ],

  [
    { number: 1, color: 'mavi' },
    { number: 3, color: 'mavi' },
    { number: 10, color: 'mavi' },
    { number: 12, color: 'mavi' },
    { number: 13, color: 'mavi' },
  ],
  [
    { number: 7, color: 'sarı' },
    { number: 7, color: 'sarı' },
    { number: 1, color: 'sarı' },
    { number: 2, color: 'sarı' },
    { number: 3, color: 'sarı' },
    { number: 4, color: 'sarı' },
  ],
  [
    { number: 2, color: 'kırmızı' },
    { number: 7, color: 'kırmızı' },
    { number: 11, color: 'kırmızı' },
    { number: 12, color: 'kırmızı' },
    { number: 13, color: 'kırmızı' },
  ],

];

let darks = tiles[0]
let blues = tiles[1]
let yellows = tiles[2]
let reds = tiles[3]

darks.sort((a, b) => a.number - b.number);
blues.sort((a, b) => a.number - b.number);
yellows.sort((a, b) => a.number - b.number);
reds.sort((a, b) => a.number - b.number);




console.log(darks, blues, yellows, reds);
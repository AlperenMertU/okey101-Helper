
const tiles = [
  [ 
    [
      { number: 1, color: 'siyah' },
      { number: 2, color: 'siyah' },
      { number: 3, color: 'siyah' },
      { number: 4, color: 'siyah' },
      { number: 5, color: 'siyah' },

    ],
 
  ],
  [
    [
      { number: 11, color: 'mavi' },
      { number: 12, color: 'mavi' },
      { number: 13, color: 'mavi' },
    ],
    { number: 6, color: 'mavi' },
    { number: 8, color: 'mavi' },
   
  ],
  [
    [
      { number: 1, color: 'sarı' },
      { number: 2, color: 'sarı' },
      { number: 3, color: 'sarı' },
    ],
    [
      { number: 2, color: 'sarı' },
      { number: 3, color: 'sarı' },
      { number: 4, color: 'sarı' },
    ],
  ],
  [
    [
      { number: 11, color: 'kırmızı' },
      { number: 12, color: 'kırmızı' },
      { number: 13, color: 'kırmızı' },
    ],
    { number: 6, color: 'kırmızı' },
    { number: 8, color: 'kırmızı' },
  ],

   [

   ]
];

function sortNumbersInTiles(tiles) {
  for (const tileGroup of tiles) {
    tileGroup.sort((a, b) =>  a.number - b.number);
  }
}

sortNumbersInTiles(tiles);

let darks = tiles[0]
let blues = tiles[1]
let yellows = tiles[2]
let reds = tiles[3]




function groupConsecutive(arr, minCount) {
  const result = [];
  let consecutiveGroup = [];

  for (const item of arr) {
    if (consecutiveGroup.length === 0 || item.number === consecutiveGroup[consecutiveGroup.length - 1].number + 1) {
      consecutiveGroup.push(item);
    } else {
      if (consecutiveGroup.length >= minCount) {
        result.push(consecutiveGroup);
      } else {
        result.push(...consecutiveGroup);
      }
      consecutiveGroup = [item];
    }
  }

  if (consecutiveGroup.length >= minCount) {
    result.push(consecutiveGroup);
  } else {
    result.push(...consecutiveGroup);
  }
  return result;
}


const darkGrouped = groupConsecutive(darks, 3);
const yellowGrouped = groupConsecutive(yellows, 3);
const blueGrouped = groupConsecutive(blues, 3);
const redGrouped = groupConsecutive(reds, 3);


console.log(yellowGrouped, darkGrouped, blueGrouped, redGrouped);
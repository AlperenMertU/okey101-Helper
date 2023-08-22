
const tiles = [
  [
    { number: 1, color: 'siyah' },
    { number: 2, color: 'siyah' },
    { number: 3, color: 'siyah' },
    { number: 4, color: 'siyah' },
    { number: 5, color: 'siyah' },
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
/*
let yellow = [[1], [3], [2, 3, 4], [11, 12, 13]];
let red = [[1, 2, 3], [3], [2], [7]];
let black = [[1], [7, 8, 9], [2]];

let fazla = [];
let diziler = [yellow, red, black];

for (let i = 1; i <= 13; i++) {
  let ortak = true;
  
  for (let dizi of diziler) {
    let ortakVar = false;
    
    for (let altDizi of dizi) {
      if (altDizi.includes(i)) {
        ortakVar = true;
        break;
      }
    }
    
    if (!ortakVar) {
      ortak = false;
      break;
    }
  }
  
  if (ortak) {
    fazla.push(i);
  }
}

for (let dizi of diziler) {
  for (let altDizi of dizi) {
    if (altDizi.length < 3) {  // Alt dizinin eleman sayısı 3'ten azsa
      for (let sayi of fazla) {
        if (altDizi.includes(sayi)) {
          altDizi.splice(altDizi.indexOf(sayi), 1);
        }
      }
    }
  }
}

console.log("Yellow:", yellow);
console.log("Red:", red);
console.log("Black:", black);
console.log("Fazla:", fazla); 
*/


const tiles = [
  { number: 1, color: 'siyah' },
  { number: 1, color: 'mavi' },
  { number: 1, color: 'sarı' },
  { number: 1, color: 'kırmızı' },

  { number: 4, color: 'siyah' },
  { number: 4, color: 'mavi' },
  { number: 4, color: 'sarı' },
  { number: 4, color: 'kırmızı' },

  { number: 6, color: 'siyah' },
  { number: 7, color: 'siyah' },
  { number: 8, color: 'siyah' },
  { number: 9, color: 'siyah' },

  { number: 11, color: 'kırmızı' },
  { number: 12, color: 'kırmızı' },
  { number: 13, color: 'kırmızı' },

  { number: 10, color: 'mavi' },
  { number: 11, color: 'mavi' },
  { number: 12, color: 'mavi' },
 
];


function groupTilesByColor(tiles) {
  const groupedTiles = {};

  for (const tile of tiles) {
    const color = tile.color;

    if (!groupedTiles[color]) {
      groupedTiles[color] = [];
    }

    groupedTiles[color].push(tile);
  }

  return groupedTiles;
}

function findNonConsecutiveGroups(tiles) {
  const nonConsecutiveGroups = [];

  const sortedTiles = tiles.slice().sort((a, b) => a.number - b.number);

  let currentGroup = [];
  for (const tile of sortedTiles) {
    if (currentGroup.length === 0) {
      currentGroup.push(tile);
    } else {
      const prevTile = currentGroup[currentGroup.length - 1];
      if (tile.number - prevTile.number > 1) {
        if (currentGroup.length < 3) {
          nonConsecutiveGroups.push(...currentGroup);
        }
        currentGroup = [];
      }
      currentGroup.push(tile);
    }
  }

  if (currentGroup.length < 3) {
    nonConsecutiveGroups.push(...currentGroup);
  }

  return nonConsecutiveGroups;
}

const groupedTiles = groupTilesByColor(tiles);
const nonConsecutiveTiles = {};

for (const color in groupedTiles) {
  nonConsecutiveTiles[color] = findNonConsecutiveGroups(groupedTiles[color]);
}






function sortFunc(tiles) {
  return tiles.sort((a, b) => a.number - b.number);
}

function sortGroup(groupedTiles) {
  const sortedGroupedTiles = {};

  for (const color in groupedTiles) {
    sortedGroupedTiles[color] = sortFunc(groupedTiles[color]);
  }

  return sortedGroupedTiles;
}

const sortedGroupedTiles = sortGroup(groupedTiles);


console.log(nonConsecutiveTiles);
console.log(sortedGroupedTiles);


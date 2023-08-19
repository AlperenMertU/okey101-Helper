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
  { number: 2, color: 'kırmızı' },

  { number: 2, color: 'siyah' },
  { number: 3, color: 'mavi' },
  { number: 7, color: 'sarı' },
  { number: 7, color: 'kırmızı' },

  { number: 6, color: 'siyah' },
  { number: 7, color: 'siyah' },
  { number: 8, color: 'siyah' },
  { number: 9, color: 'siyah' },

  { number: 11, color: 'kırmızı' },
  { number: 12, color: 'kırmızı' },
  { number: 13, color: 'kırmızı' },

  { number: 10, color: 'mavi' },
  { number: 12, color: 'mavi' },
  { number: 12, color: 'mavi' },

];

// Ardışık sayıları ve renkleri depolamak için boş diziler oluşturun
const consecutiveNumberSequences = [];
const sameNumberDifferentColors = [];

let currentSequence = [];
let previousTile = null;

// Tile'ları tarayarak işlem yapın
tiles.forEach(tile => {
  if (!previousTile) {
    // İlk tile için başlangıç durumu
    currentSequence.push(tile);
    previousTile = tile;
  } else if (
    tile.number === previousTile.number &&
    tile.color === previousTile.color
  ) {
    // Aynı tile devam ediyor
    currentSequence.push(tile);
    previousTile = tile;
  } else if (
    tile.number === previousTile.number + 1 &&
    tile.color === previousTile.color
  ) {
    // Ardışık sayı devam ediyor
    currentSequence.push(tile);
    previousTile = tile;
  } else {
    // Ardışık dizisi bitti, işle ve sıfırla
    if (currentSequence.length >= 3) {
      consecutiveNumberSequences.push([...currentSequence]);
    }
    currentSequence = [];
    previousTile = tile;
    currentSequence.push(tile);
  }

  // Farklı renkte aynı sayıları kontrol edin
  const sameNumberTiles = tiles.filter(t => t.number === tile.number);
  const uniqueColors = [...new Set(sameNumberTiles.map(t => t.color))];
  if (uniqueColors.length >= 3 && !sameNumberDifferentColors.includes(tile.number)) {
    sameNumberDifferentColors.push(tile.number);
  }
});

// Son tile dizisini işle
if (currentSequence.length >= 3) {
  consecutiveNumberSequences.push([...currentSequence]);
}

console.log("Ardışık Sayı Dizileri:", consecutiveNumberSequences);
console.log("Farklı Renkte Aynı Sayılar:", sameNumberDifferentColors);

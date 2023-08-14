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
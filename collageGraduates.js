let nama = "joni";
let skor = 100;

if (skor >= 80 && skor <= 100) {
    console.log(`${nama} mendapat skor A`);
} else if (skor >= 65 && skor <= 79) {
    console.log(`${nama} mendapat skor B`);
} else if (skor >= 50 && skor <= 64) {
    console.log(`${nama} mendapat skor C`);
}else if (skor >= 35 && skor <= 49) {
    console.log(`${nama} mendapat skor D`);
}else if (skor >= 0 && skor <= 34) {
    console.log(`${nama} mendapat skor E`);
} else {
    console.log(`nilai invalid`)
}
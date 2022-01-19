/* pseudocode

    INPUT 'jumlah baju masuk" with 0
    INPUT 'jumlah baju tersedia' with 20
    REPEAT 'jumlah baju masuk' < jumlah baju tersedia
    DISPLAY baju masuk ke (jumlah baju) 
    IF jumlah baju masuk = jumlah baju tersedia
    DISPLAY mesin otomatis menyala

*/

let jbm = 0;
let jbt = 20;

for (let i = 1; i <= jbt; i++) {
    if (jbm < jbt) {
        jbm += 1;
    } if (jbm === jbt) {
        console.log('lampu nyala');
        break;
    };
}
//perulangan

// siapkan bahan 
let nama = "tegar"
let nilai = 90
let absen = 2

// algoritma kenaikan kelas 
if (nilai >= 70 && absen < 5) {
    console.log(`${nama}` + " " + "telah dinyatakan lulus" + " " + `dengan nilai ${nilai} dan jumlah absen ${absen}`)
} else {
    console.log(`${nama}` + " " + "tidak lulus")
};

/* Pseudocode 

STORE "siswa" with any string
STORE "nilai" with any number
STORE "absen" with any number
READ "siswa", "nilai", "absen" 
     if nilai > 70 AND absen < 50
     DISPLAY nama : "siswa" nilai: "nilai" selamat anda lulus
     else
     DISPLAY "siswa" nilai: "nilai" selamat anda tidak lulus
     END IF
END
*/
$(document).ready(function() {
  $('#sum-form').submit(function(e) {
    e.preventDefault(); // Menghentikan pengiriman form

    // Mendapatkan nilai input
    var number1 = parseInt($('#number1').val()) * 60;
    var number2 = parseInt($('#number2').val()) * 60;
    var number3 = parseInt($('#number3').val()) * 60;
    var number4 = parseInt($('#number4').val()) * 60;
    var ltr = parseInt($('#liter').val());


    // hitungan menit per liter
    var satu;
    if (number1 > 0) {
      satu = ltr / number1;
    } else if (number1 === 0) {
      satu = 0;
    }

    var dua;
    if (number2 > 0) {
      dua = ltr / number2;
    } else if (number2 === 0) {
      dua = 0;
    }

    var tiga;
    if (number3 > 0) {
      tiga = ltr / number3;
    } else if (number3 === 0) {
      tiga = 0;
    }

    var empat;
    if (number4 > 0) {
      empat = ltr / number4;
    } else if (number4 === 0) {
      empat = 0;
    }

    console.log(satu);
    console.log(dua);
    console.log(tiga);
    console.log(empat);

    var hasil = satu + dua + tiga + empat;
    var jumlah = ltr / hasil;

    var dfhasil = jumlah.toFixed(2);
    // Menggunakan toFixed() untuk membatasi dua angka di belakang koma

    console.log(dfhasil);

    // Menampilkan hasil pada input "result"
    $('#result').val(dfhasil);
  }
  );
});

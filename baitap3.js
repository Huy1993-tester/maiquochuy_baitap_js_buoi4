/**
 * Input
 * Nhập 3 số nguyên
 * numA = 0;
 * numB = 0;
 * numC = 0;
 * 
 *Tính số chẳn : Lần lượt lấy numA / 2  ; numB / 2 ; numC / 2
 * Số lẻ là những số không chia hết cho 2
 * 
 * Xuất kq
 */


var kqSC = 0;
var kqSL = 0;
var numA;
var numB;
var numC;

function tinh(event) {
  event.preventDefault();
  numA = document.getElementById("soThu4").value;
  numB = document.getElementById("soThu5").value;
  numC = document.getElementById("soThu6").value;

  if ((numA) % 2 === 0) {
    if ((numB) % 2 === 0) {
      if ((numC) % 2 === 0) {
        kqSC = 3;
        kqSL = 0;
      }
      else { kqSC = 2, kqSL = 1 }
    }
    else if ((numC) % 2 === 0) {
      kqSC = 2;
      kqSL = 1;
    }
    else { kqSC = 1, kqSL = 2 }
  }
  else if ((numB) % 2 === 0) {
    if ((numC) % 2 === 0) {
      kqSC = 2;
      kqSL = 1;
    }
    else { kqSC = 1, kqSL = 2 }
  }
  else if (numC % 2 === 0) {
    kqSC = 1;
    kqSL = 2;
  }
  else { kqSC = 0; kqSL = 3 }


  var showkq = (kqSC + " số chẳn ") + " và " + (kqSL + " số lẻ");
  console.log(showkq);
  document.getElementById("thongBaoSoChanLe").innerHTML = showkq;
  document.getElementById("thongBaoSoChanLe").className = "card-footer text-muted alert alert-warning";
}





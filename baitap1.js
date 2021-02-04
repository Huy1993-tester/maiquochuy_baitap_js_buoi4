/**
 * bài tập 1:
 * Nhập 3 số nguyên
 * a = 0;
 * b = 0;
 * c = 0;
 * Xuất 3 số nguyên theo thứ tự tăng dần
 * + Đặt a > b && a > c && b > c => c  b  a
 * + Đặt a > b && a > c && b < c => b  c  a 
 *                      && b = c => 
 * + Đặt b > a && b > c && a > c => c a b
 * + Đạt b > a && b > c && a < c => a c b
 *                      && a = c =>
 * + Đặt c > a && c > b && a > b => b a c
 * + Đặt c > a && c > b && a < b => a b c
 *                      && a = b =>                 
 * + Đặt a = b || a  = c  && b = c => vui lòng nhập 3 số khác nhau
 * + Đạt a = 0  || b = 0  || c = 0 => vui lòng nhập khác 0
 * + Đặt a < 0 || b < 0 || c < 0 => vui lòng nhập lớn hơn 0
 * 
 *  Xuất kq theo thứ tự tăng dần 
 */
var number1 = 0;
var number2 = 0;
var number3 = 0;

var btnTinhToan = document.getElementById("btnTinh");
btnTinhToan.onclick = function (event) {
    event.preventDefault();

    var n1 = document.getElementById("soThu1").value;
    var n2 = document.getElementById("soThu2").value;
    var n3 = document.getElementById("soThu3").value;
    var number1 = parseInt(n1);
    var number2 = parseInt(n2);
    var number3 = parseInt(n3);

    if ((number1) == (number2) && (number1) == number3 && (number2) == number3) {
        document.getElementById("thongBao").innerHTML = ("Vui lòng nhập 3 số khác nhau")
    }
    else if ((number1)  >= (number2) && (number1) > (number3) && ((number2) > (number3) || (number2) == (number3))) {
        document.getElementById("thongBao").innerHTML = ("Số thứ tự tăng dần là: " + number3 + " " + number2 + " " + number1);
    }
    else if ((number1)  > (number2) && (number1) >= (number3) && (number2) < (number3)) {
        document.getElementById("thongBao").innerHTML = ("Số thứ tự tăng dần là: " + number2 + " " + number3 + " " + number1);
    }
    else if ((number2) > (number1)  && (number2) > (number3) && ((number1)  > (number3) || (number1)  == (number3))) {
        document.getElementById("thongBao").innerHTML = ("Số thứ tự tăng dần là: " + number3 + " " + number1 + " " + number2);
    }
    else if ((number2) > (number1)  && (number2) > (number3) && (number1)  < (number3)) {
        document.getElementById("thongBao").innerHTML = ("Số thứ tự tăng dần là: " + number1 + " " + number3 + " " + number2);
    }
    else if ((number3) > (number1)  && (number3) > (number2) && ((number1)  > (number2) || (number1)  == (number2))) {
        document.getElementById("thongBao").innerHTML = ("Số thứ tự tăng dần là: " + number2 + " " + number1 + " " + number3);
    }
    else if ((number3 )> (number1)  && (number3) >= (number2) && (number1)  < (number2)) {
        document.getElementById("thongBao").innerHTML = ("Số thứ tự tăng dần là: " + number1 + " " + number2 + " " + number3);
    }

}







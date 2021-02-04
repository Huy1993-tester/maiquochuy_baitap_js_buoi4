/**
 * Tính khoảng cách sinh viên xa trường nhất
 * input
 * Tọa độ 
 * sv1  (x1,y1)
 * sv2 (x2,y2)
 * sv3 (x3,y3)
 * school (a,b)
 * Out 
 * sv nào xa trường nhất
 */

var sv1x;
var sv1y;
var sv2x;
var sv2y;
var sv3x;
var sv3y;
var schoola;
var schoolb;

function btnTimKhoangCach(event) {
    event.preventDefault();
    sv1x = document.getElementById("x1").value;
    sv1y = document.getElementById("y1").value;
    sv2x = document.getElementById("x2").value;
    sv2y = document.getElementById("y2").value;
    sv3x = document.getElementById("x3").value;
    sv3y = document.getElementById("y3").value;
    schoola = document.getElementById("truonga").value;
    schoolb = document.getElementById("truongb").value;

    var congthuc1 = parseInt(((schoola - sv1x) * (schoola - sv1x)) + ((schoolb - sv1y) * (schoolb - sv1y)));
    //  console.log(congthuc1);
    var sinhVien1 = Math.floor(Math.sqrt(congthuc1));
    console.log("Khoang cach sv1 : " + sinhVien1);

    var congthuc2 = parseInt(((schoola - sv2x) * (schoola - sv2x)) + ((schoolb - sv2y) * (schoolb - sv2y)));
    //  console.log(congthuc2);
    var sinhVien2 = Math.floor(Math.sqrt(congthuc2));
    console.log("Khoang cach sv2 : " + sinhVien2);

    var congthuc3 = parseInt(((schoola - sv3x) * (schoola - sv3x)) + ((schoolb - sv3y) * (schoolb - sv3y)));
    //  console.log(congthuc3);
    var sinhVien3 = Math.floor(Math.sqrt(congthuc3));
    console.log("Khoang cach sv3 : " + sinhVien3);


    if (sinhVien3 > sinhVien1) {
        sinhVienXaTruong = ("Sinh viên 3 xa nhất");
    } else if (sinhVien2 > sinhVien1) {
        sinhVienXaTruong = ("Sinh viên 2 xa nhất");
    } else { sinhVienXaTruong = ("Sinh viên 1 xa nhất") }
    document.getElementById("thongBaoSinhVienXaNhat").innerHTML=sinhVienXaTruong;
}




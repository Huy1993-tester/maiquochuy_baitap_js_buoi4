/***
 * chương trình nhập ngày tháng năm
 * input ngày tháng năm
 * xử lý ngày trước đó và ngày sau đó
 * xử lý tháng trước đó và tháng sau đó (trường hợp ngày 1 và 28,29,30,31)
 * xử lý năm trước đó và năm sau đó (trường hợp tháng 1 và tháng 12)
 * 
 * output 
 */

var dayNhap = 0;
var monthNhap = 0;
var yearNhap = 0;

var ngayI = "";

var ngayTruoc = "";
var ngaySau = "";
//  var thang = "";
var thangTruoc = "";
var thangSau = "";
//  var nam = "";
var namTruoc = "";
var namSau = "";
var QK = "";
var HT = "";
var TL = "";

var btnFind = document.getElementById("btnTimKiem");
btnFind.onclick = function (event) {
    event.preventDefault();
    dayNhap = parseInt(document.getElementById("ngay").value);
    monthNhap = parseInt(document.getElementById("thang").value);
    yearNhap = parseInt(document.getElementById("nam").value);
    if (dayNhap >= 1 && dayNhap <= 31) {
        ngayI = dayNhap;
    }
    else {
        document.getElementById("thongBaoTK").innerHTML = ("Không xác định được!");
    }

    switch (ngayI) {
        case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 17: case 18: case 19: case 20: case 21: case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29:
            if (monthNhap == 1 || monthNhap == 3 || monthNhap == 4 || monthNhap == 5 || monthNhap == 6 || monthNhap == 7 || monthNhap == 8 || monthNhap == 9 || monthNhap == 10 || monthNhap == 11 || monthNhap == 12) {
                ngayTruoc = dayNhap - 1;
                ngaySau = dayNhap + 1;
                thangTruoc = monthNhap;
                thangSau = monthNhap;
                namTruoc = yearNhap;
                namSau = yearNhap;
            } else if (monthNhap == 2 && dayNhap <= 27) {
                ngayTruoc = dayNhap - 1;
                ngaySau = dayNhap + 1;
                thangTruoc = monthNhap;
                thangSau = monthNhap;
                namTruoc = yearNhap;
                namSau = yearNhap;
            } else if (monthNhap == 2 && dayNhap == 28) {
                ngayTruoc = dayNhap - 1;
                ngaySau = 1;
                thangTruoc = monthNhap;
                thangSau = monthNhap + 1;
                namTruoc = yearNhap;
                namSau = yearNhap;
            }
            break;
        case 1:
            if (monthNhap == 3) {
                ngayTruoc = 28;
                ngaySau = dayNhap + 1;
                thangTruoc = monthNhap - 1;
                thangSau = monthNhap;
                namTruoc = yearNhap;
                namSau = yearNhap;
            } else if (monthNhap == 2 || monthNhap == 4 || monthNhap == 6 || monthNhap == 9 || monthNhap == 11) {
                ngayTruoc = 31;
                ngaySau = dayNhap + 1;
                thangTruoc = monthNhap - 1;
                thangSau = monthNhap;
                namTruoc = yearNhap;
                namSau = yearNhap;
            } else if (monthNhap == 5 || monthNhap == 7 || monthNhap == 8 || monthNhap == 10 || monthNhap == 12) {
                ngayTruoc = 30;
                ngaySau = dayNhap + 1;
                thangTruoc = monthNhap - 1;
                thangSau = monthNhap;
                namTruoc = yearNhap;
                namSau = yearNhap;
            } else if (monthNhap == 1) {
                ngayTruoc = 31;
                ngaySau = dayNhap + 1;
                thangTruoc = 12;
                thangSau = monthNhap;
                namTruoc = yearNhap - 1;
                namSau = yearNhap;
            }
            break;
        case 30:
            if (monthNhap == 4 || monthNhap == 6 || monthNhap == 9 || monthNhap == 11) {
                ngayTruoc = dayNhap - 1;
                ngaySau = 1;
                thangTruoc = monthNhap;
                thangSau = monthNhap + 1;
                namTruoc = yearNhap;
                namSau = yearNhap;
            }
            break;
        case 31:
            if (monthNhap == 1 || monthNhap == 3 || monthNhap == 5 || monthNhap == 7 || monthNhap == 8 || monthNhap == 10) {
                ngayTruoc = dayNhap - 1;
                ngaySau = 1;
                thangTruoc = monthNhap;
                thangSau = monthNhap + 1;
                namTruoc = yearNhap;
                namSau = yearNhap;
            } else if (monthNhap == 12) {
                ngayTruoc = dayNhap - 1;
                ngaySau = 1;
                thangTruoc = monthNhap;
                thangSau = 1;
                namTruoc = yearNhap;
                namSau = yearNhap + 1;
            }
            break;
    }
    var QK = (ngayTruoc + "/" + thangTruoc + "/" + namTruoc);
    var HT = (dayNhap + "/" + monthNhap + "/" + yearNhap);
    var TL = (ngaySau + "/" + thangSau + "/" + namSau);
    document.getElementById("thongBaoTK1").innerHTML ="<div> Ngày trước đó là: " +  QK + "</div>";
    document.getElementById("thongBaoTK2").innerHTML = "<div> Ngày nhập là: " +  HT + "</div>";
    document.getElementById("thongBaoTK3").innerHTML = "<div> Ngày sau đó là: " +  TL + "</div>";
}





/**
 * Chương trình đọc 3 số nguyên 
 * input
 * numSoNguyen = a;
 * xử lý tách a theo hàng trăm, hàng chục, hàng đơn vị.
 * Out put 
 * đọc tên số a theo hàng trăm, hàng chục, hàng đơn vị
 * 
 */


var numSoNguyen;
var callTram = "";
var callChuc = "";
var callDonVi = "";
var hangTram;
var hangChuc;
var hangDonVi;
var hienThiCachDoc;
/// Lỗi khi nhập hàng trăm bằng 0; chưa cắt được 0 để xử lý


function btnRead(event) {
    event.preventDefault();
    numSoNguyen = document.getElementById("nhapSN").value;
    hangTram = Math.floor(numSoNguyen / 100);
    hangChuc = Math.floor(numSoNguyen % 100 / 10);
    hangDonVi = Math.floor(numSoNguyen % 10);

    if (hangTram == 1) {
        callTram = "Một";
    } else if (hangTram == 2) {
        callTram = "Hai";
    } else if (hangTram == 3) {
        callTram = "Ba";

    } else if (hangTram == 4) {
        callTram = "Bốn";

    } else if (hangTram == 5) {
        callTram = "Năm";
    } else if (hangTram == 6) {
        callTram = "Sáu";

    } else if (hangTram == 7) {
        callTram = "Bảy";

    } else if (hangTram == 8) {
        callTram = "Tám";

    } else if (hangTram == 9) {
        callTram = "Chín";

    } else if (hangTram == 0) {
        callTram = "Không"
    }

    if (hangChuc == 1) {
        callChuc = "Mười";
    } else if (hangChuc == 2) {
        callChuc = "Hai";
    } else if (hangChuc == 3) {
        callChuc = "Ba";

    } else if (hangChuc == 4) {
        callChuc = "Bốn";

    } else if (hangChuc == 5) {
        callChuc = "Năm";

    } else if (hangChuc == 6) {
        callChuc = "Sáu";

    } else if (hangChuc == 7) {
        callChuc = "Bảy";

    } else if (hangChuc == 8) {
        callChuc = "Tám";

    } else if (hangChuc == 9) {
        callChuc = "Chín";

    } else if (hangChuc == 0) {
        callChuc = "Không"
    }

    if (hangDonVi == 1) {
        callDonVi = "Một";
    } else if (hangDonVi == 2) {
        callDonVi = "Hai";
    } else if (hangDonVi == 3) {
        callDonVi = "Ba";

    } else if (hangDonVi == 4) {
        callDonVi = "Bốn";

    } else if (hangDonVi == 5) {
        callDonVi = "Năm";

    } else if (hangDonVi == 6) {
        callDonVi = "Sáu";

    } else if (hangDonVi == 7) {
        callDonVi = "Bảy";

    } else if (hangDonVi == 8) {
        callDonVi = "Tám";

    } else if (hangDonVi == 9) {
        callDonVi = "Chín";
    } else if (hangDonVi == 0) {
        callDonVi = "Không"
    }

    if ( 100 > numSoNguyen) {
        hienThiCachDoc = "Lỗi không đọc được số nhỏ hơn 100"
    } else if (numSoNguyen > 999) {
        hienThiCachDoc = "Lỗi không đọc được số lớn hơn 999"
    }
    
    if ((1 <= hangTram && hangTram <= 9) && (hangChuc >= 2 && hangChuc <= 9) && (hangDonVi >= 1 && hangDonVi <= 9)) {
        hienThiCachDoc = (callTram + " Trăm " + callChuc + " Mươi " + callDonVi);
    } else if ((1 <= hangTram && hangTram <= 9) && (hangChuc == 1) && (hangDonVi >= 1 && hangDonVi <= 9)) {
        hienThiCachDoc = (callTram + " Trăm " + callChuc + " " + callDonVi);
    } else if ((1 <= hangTram && hangTram <= 9) && (hangChuc == 0) && (hangDonVi >= 1 && hangDonVi <= 9)) {
        hienThiCachDoc = (callTram + " Trăm " + " lẻ " + callDonVi);
    } else if ((1 <= hangTram && hangTram <= 9) && (hangChuc == 1) && (hangDonVi == 0)) {
        hienThiCachDoc = (callTram + " Trăm " + callChuc);
    } else if ((1 <= hangTram && hangTram <= 9) && (hangChuc == 2) && (hangDonVi == 0)) {
        hienThiCachDoc = (callTram + " Trăm " + callChuc + " Mươi ");
    } else if ((1 <= hangTram && hangTram <= 9) && (hangChuc == 0) && (hangDonVi == 0)) {
        hienThiCachDoc = (callTram + " Trăm ");
    } 
    document.getElementById("cachDoc").innerHTML = hienThiCachDoc;
}



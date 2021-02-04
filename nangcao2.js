/**
 * Nhập tháng năm cho biết tháng đó có bao nhiêu ngày tính cả tháng nhuần năm nhuần
 * input 
 * thangM 
 * namY
 * tính ra có bao nhiêu ngày
 * Output
 */


var thangM = 0;
var namY = 0;
var tongSoNgay = 0;
var namNhuan = 0;
var namKhongNhuan = 0;
var soDu = 0;

var nutDem = document.getElementById("btnDem");
nutDem.onclick = function (event) {
    event.preventDefault();
    thangM = parseInt(document.getElementById("soThang").value);
    namY = parseInt(document.getElementById("soNam").value);
    if (1 <= thangM && thangM <= 12) {
        thangT = thangM;

    } else {
        document.getElementById("thongBaoTongNgay").innerHTML = "Vui lòng nhập từ tháng 1 đến tháng 12"
    };


    soDu = parseInt(namY % 19);
    if (soDu == 3 || soDu == 6 || soDu == 9 || soDu == 11 || soDu == 14 || soDu == 17) {
        namNhuan = namY;
    }

    switch (thangT) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            tongSoNgay = 31;
            break;
        case 2:
            if (namNhuan) {
                tongSoNgay = 29;
            }
            else  {
                tongSoNgay = 28;
            }
            break;
        case 4: case 6: case 9: case 11:
            tongSoNgay = 30;
            break;
    }
    document.getElementById("thongBaoTongNgay").innerHTML = tongSoNgay;

}




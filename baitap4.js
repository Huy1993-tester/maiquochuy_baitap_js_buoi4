/***
 * Viết chương trình nhập 3 cạnh => tên tam giác 
 * input nhập 3 cạnh của 
 * canhA = 0;
 * canhB = 0;
 * canhC = 0;
 * output : 
 * 2 cạnh bằng nhau là tam giác đều
 * 3 cạnh bằng nhau là tam giác cân
 * 3 cạnh không bằng nhau và có tổng bình phương 2 cạnh nhỏ  = cạnh lớn
 * 
 */




var canhA = 0;
var canhB = 0;
var canhC = 0;
var kq = "";


var findtamGiac = document.getElementById("btnTimTamGiac");
findtamGiac.onclick = function (event) {
    event.preventDefault();
    canhA = parseInt(document.getElementById("canh1").value);
    canhB = parseInt(document.getElementById("canh2").value);
    canhC = parseInt(document.getElementById("canh3").value);

    if ((canhA) === 0 || (canhB) === 0 || (canhC) === 0 ){
        kq = "Vui lòng nhập khác không";
    }
    else if ((canhA) == (canhB) && (canhA) == (canhC)) {
        kq = "Đây là tam giác cân";
    }
    else if ((canhA) == (canhB) || (canhA) == (canhC) || (canhB) == (canhC)) {
        kq = "Đây là tam giác đều";
    }
    else if ((canhA) !== (canhB) && (canhA) !== (canhC)) {
        if ((canhA * canhA) == ((canhB * canhB) + (canhC * canhC))) {
            kq = "Đây là tam giác vuông"
        }
        else if ((canhB * canhB) == (canhA * canhA) + (canhC * canhC)) {
            kq = "Đây là tam giác vuông"
        }
        else if ((canhC * canhC) == (canhA * canhA) + (canhB * canhB)) {
            kq = "Đây là tam giác vuông"
        }
        else { kq = "Đây không phải tam giác vuông" }
    }

    document.getElementById("thongBaoTamGiac").innerHTML=kq;
}












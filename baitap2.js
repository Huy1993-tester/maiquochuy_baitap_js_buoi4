/**
 * Viết chương trình chào hỏi 
 * Default : Xin chào, ai đang sử dụng máy?
 * Input                            Output
 * Nếu Bố || (B)                  =>  Xin Chào Bố!
 * Ngược lại nếu Mẹ || (M)        =>  Xin Chào Mẹ!
 * Ngược lại nếu Anh Trai || (A)  =>  Xin Chào Anh!
 * Ngược lại nếu Em Gái || (E)    =>  Xin Chào Em!
 * Ngược lại                      =>  Xin Chào Người Lạ Ơi!
 * Xuất kết quả ra màn hình
 * 
 */


var user = "";
var kQFind = "";

var findName = document.getElementById("btnChao");
findName.onclick = function (event) {
    event.preventDefault();
    user = document.getElementById("userName").value;
    if (user === "B" || user === "b" || user === "Bố" || user === "BỐ" || user === "bố" || user === "bo") {
        kQFind=("Xin Chào Bố!");
    } else if (user === "M" || user === "m" || user === "Mẹ" || user === "MẸ" || user === "mẹ" || user === "me") {
        kQFind=("Xin Chào Mẹ!");
    } else if (user === "a" || user === "A" || user === "anh" || user === "Anh" || user === "ANH" || user === "aNH" || user === "AnH" || user === "ANh") {
        kQFind=("Xin Chào Anh!");
    } else if (user === "e" || user === "E" || user === "em" || user === "EM" || user === "Em" || user === "eM") {
        kQFind=("Xin Chào Em!");
    } else { kQFind=("Xin Chào Người Lạ Ơi!") };
    document.getElementById("LoiChao").innerHTML=kQFind;
}







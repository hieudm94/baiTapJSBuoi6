//! TÌM SỐ CHẴN, LẺ NHỎ HƠN 100

function soChanLe() {
    var soChan = [];
    var soLe = [];
    for (var i = 0; i < 100; i++) {
        if (i % 2 == 0) {
            soChan.push(i);
        } else {
            soLe.push(i)
        }
    }
    document.getElementById("txtResultCL").innerHTML = "Số chẵn là: " + soChan + "<br>" + "Số lẻ là: " + soLe;;

}

document.getElementById("submit").onclick = soChanLe;



//! ĐẾM SỐ CHIA HẾT CHO 3
function soCHC3() {
    var count = 0;
    for (var i = 0; i < 1000; i++) {
        if (i % 3 == 0) {
            count++;
        }
    }
    document.getElementById("txtResultCHC3").innerHTML = "số chia hết cho 3 nhỏ hơn 1000 là: " + count + " số";

}

document.getElementById("btnCHC3").onclick = soCHC3;


// ! TÌM SỐ NGUYÊN DƯƠNG NHỎ NHẤT
function KQSoDuong() {
    var sum = 1;
    for (var i = 1; sum < 10000; i++) {
        sum += i;
    }
    document.getElementById("txtResultSoDuong").innerHTML = "Số nguyên dương nhỏ nhất là : " + (i-1) + " số";

}
document.getElementById("btnSoDuong").onclick = KQSoDuong;


//! TÍNH TỔNG
function ketQuaTong() {
    var soNguyenX = Number(document.getElementById("soX").value);
    var soNguyenN = Number(document.getElementById("soN").value);
    var sum = 0;
    for (var i = 1; i <= soNguyenN; i++) {
        sum += Math.pow(soNguyenX, i);
    }
    document.getElementById("txtResultTong").innerHTML = "Tổng số cần tìm là : " + sum;

}
document.getElementById("btnTong").onclick = ketQuaTong;

//!TÍNH GIAI THỪA
function KetQuaGT() {
    var soNguyenN = Number(document.getElementById("soNguyenN").value);
    var giaiThua = 1;
    for (var i = 1; i <= soNguyenN; i++) {
        giaiThua = giaiThua * i;

    }

    document.getElementById("txtResultGiaiThua").innerHTML = "Giai thừa cần tìm là : " + giaiThua;

}
document.getElementById("btnGiaiThua").onclick = KetQuaGT;


//!IN RA SỐ CHẴN SỐ LẺ
function ketQuaChanLe() {
    var content = document.querySelector("#txtResultChanLe");

    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            var taoDiv = document.createElement("div");
            taoDiv.style.width = "100%";
            taoDiv.style.background = "red";
            taoDiv.style.color = "white";
            taoDiv.innerHTML = "Div chẵn";
            content.appendChild(taoDiv);

        } else {
            var taoDiv = document.createElement("div");
            taoDiv.style.width = "100%";
            taoDiv.style.background = "blue";
            taoDiv.style.color = "white";
            taoDiv.innerHTML = "Div lẻ";
            content.appendChild(taoDiv);
        }
    }


}
document.getElementById("btnChanLe").onclick = ketQuaChanLe;

//! IN SỐ NGUYÊN TỐ

function ketQuaSNT() {
    var soNT = " ";
    var numberNT = Number(document.querySelector("#soNguyenTo").value);
   
    for(var i = 2; i <= numberNT ; i++){
        var flag = true;
        for(var j = 2; j <= Math.sqrt(i); j++){
            if(i % j === 0){
                flag = false;
                break;
            }
        }
        if(flag){
            soNT += i + " ";
        }
    }

    document.getElementById("txtResultSoNguyenTo").innerHTML=soNT;
    
}

document.getElementById("btnSoNguyenTo").onclick = ketQuaSNT;

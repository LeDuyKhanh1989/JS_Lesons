var a= parseInt(prompt("nhập vào điểm vật lý:"));
var b= parseInt(prompt("nhập vào điểm hóa:"));
var c= parseInt(prompt("nhập vào điểm Sinh học:"));
var d;


d=(a+b+c)/3;
console.log('Điểm trung bình của sinh viên là:'+ d);

var doC=parseInt(prompt('Nhập vào nhiệt độ C:'));
var f;
f= parseFloat(((9*doC)+160)/5);
console.log('nhiệt độ chuyển đổi từ '+''+doC+'*C sang độ F là:'+f);

// tính diện tích hình tròn
var bankinh = parseFloat(prompt('nhập vào bán kính đường tròn'));
var dientich;
var pi=3.14;
var chuvi;
dientich=bankinh*bankinh*pi;
chuvi=pi*bankinh*2;
console.log('diện tích là:'+dientich+'  '+' Chu vi là:'+chuvi);

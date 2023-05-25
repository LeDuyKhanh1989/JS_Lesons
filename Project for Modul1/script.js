
console.log(document.getElementById('banner').src)
let index = 1;
function changeBanner() {
    let a = ["http://127.0.0.1:5500/Banner1.png", "http://127.0.0.1:5500/Banner2.png", "http://127.0.0.1:5500/Banner3.png"];
    document.getElementById('banner').src = a[index];
    index++;
    if (index > 2) {
        index = 0;
    }
}
setInterval(changeBanner, 1000);

//
let arr = [
    ["iPhone6", 6000, "đen", "http://127.0.0.1:5500/IP6.jpg"],
    ["iPhone11", 11000, "đen", "http://127.0.0.1:5500/IP11.jpg"],
    ["iPhone12Pro", 12000, "đen", "http://127.0.0.1:5500/IP12Pro.jpg"]
];

console.log(arr);
let productName = document.getElementById('productName');
let price = document.getElementById('price');
let color = document.getElementById('color');
let src = document.getElementById('src');
////
function createTable(arr) {
    let table = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
    table = table + "<tr id='Headers'>";
    table = table + "<td>STT</td>";
    table = table + "<td>Product's name</td>";
    table = table + "<td>Price</td>";
    table = table + "<td>Color</td>";
    table = table + "<td>Image</td>";
    table = table + "</tr> <br>";

    for (let i = 0; i < arr.length; i++) {
        table = table + "<tr>";
        let stt = i;
        table = table + "<td>" + stt + "</td>";
        table = table + "<td>" + arr[i][0] + "</td>";
        table = table + "<td>" + arr[i][1] + "</td>";
        table = table + "<td>" + arr[i][2] + "</td>";
        table = table + `<td> <img src= "${arr[i][3]}" alt="Ảnh sản phẩm"> </td>`;
        table = table + `<td><button class="editButton" onclick='showFormEdit(${i})'>Edit</button></td>`;
        table = table + `<td><button class="deleteButton" onclick='Xoa(${i})'>Delete</button></td>`;
        table = table + "</tr>";

    }
    document.getElementById('show').innerHTML = table;
}

createTable(arr);

////// Adding
function adding(array,bien1,bien2,bien3,bien4) {

   let newArr=[];
   console.log(arr);
}

function fixing(arr, productName, price, color, src) {
    let newArr = []

}
// /////  Fixing

// function fixing() {
//     console.log(arr);
//     let a = document.getElementById('productName');
//     let b = document.getElementById('fixItem');
//     for (let i = 0; i < arr.length; i++) {
//         if (a.value == arr[i]) {
//             arr[i] = b.value;
//         }
//     }
//     console.log(arr);
//     createTable(arr);
// }
//// Delete

function Xoa(index) {
    arr.splice(index, 1)
    createTable(arr);
}

// Show form edit (Code thêm từ thầy Huy)
function showFormEdit(index) {
    document.getElementById('formEdit').innerHTML = `
    <h3> Form Edit</h3>
    <input type="text" placeholeder=" Điền vào sửa" id="editName">
    <button class="mainButton" onclick="edit(${index})">Save</button>
    `;
    let name = arr[index];
    document.getElementById('editName').value = name;

}

function edit(index) {
    let b = document.getElementById('editName');
    arr[index] = b.value;
    document.getElementById('formEdit').innerHTML = "";
    createTable(arr);
}


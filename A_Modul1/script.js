class ProductList {
    constructor(productName, price, color, src) {
        this.productName = productName;
        this.price = price;
        this.color = color;
        this.src = src;
    }
    setName(value) {
        return this.productName = value;
    }

    setPrice(value) {
        return this.price = value;
    }
    setColor(value) {
        return this.color = value;
    }
    setSRC(value) {
        return this.src = value;
    }

    productNameFiter() {
        return this.productName;
    };
    priceFiter() {
        return this.price;
    };
    colorFiter() {
        return this.color;
    };
    srcFiter() {
        return this.src;
    };
    infor() {
        return `${this.productName} , ${this.price}, ${this.color},${this.src}`;
    }
    changeProductionName(change) {
        this.productName = change;

    }
}
class user {
    account;
    pass;
    constructor(account, pass) {
        this.account = account;
        this.pass = pass;
    }
}
let admin = new user("admin", 12345);
let user1 = new user("test1", 123);
let user2 = new user("test2", 123);
let user3 = new user("test3", 123);
let arrLog = [admin, user1, user2, user3];

let SP1 = new ProductList("IPhone 6", 300, "Đen", "http://127.0.0.1:5500/IP6.jpg");
let SP2 = new ProductList("IPhone 11", 750, "Trắng", "http://127.0.0.1:5500/IP11.jpg");
let SP3 = new ProductList("IPhone 12 Pro Max", 1500, "Đen", "http://127.0.0.1:5500/IP12Pro.jpg");
let SP4 = new ProductList("IPhone 12 Pro Max", 1530, "Xanh", "http://127.0.0.1:5500/IP12Pro.jpg");
let SP5 = new ProductList("Classic phone", 900, "Xanh", "http://127.0.0.1:5500/DTBan.jpg");
let SP6 = new ProductList("SamSung Zplip", 3430, "Xanh-Đen", "http://127.0.0.1:5500/SamXungGap.jpg");
let SP7 = new ProductList("SamSung galaxy s23", 2500, "Đen-Trắng", "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1bJvDB.img?w=720&h=540&m=6");
let SP8 = new ProductList("SamSung galaxy s24 ultra", 2600, "Xám", "https://cdn.mos.cms.futurecdn.net/ahXvYK4vQAMGdCCLPzKz5X-1920-80.jpeg.webp");
let arr = [SP1, SP2, SP3, SP4, SP5, SP7, SP8];
arr.push(SP6)
console.log(arr);
let buyArr = [];
let hideDeleteFix = 0;


// Show table
function createTable(arr) {
    let table = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
    table = table + "<tr class='Headers'>";
    table = table + "<td>STT</td>";
    table = table + "<td>Product's name</td>";
    table = table + "<td>Price ($)</td>";
    table = table + "<td>Color</td>";
    table = table + "<td>Image</td>";
    table = table + "</tr> <br>";
    for (let i = 0; i < arr.length; i++) {
        table = table + "<tr>";
        let stt = i;
        table = table + "<td>" + stt + "</td>";
        table = table + "<td>" + arr[i].productName + "</td>";
        table = table + "<td>" + arr[i].price + "</td>";
        table = table + "<td>" + arr[i].color + "</td>";
        table = table + `<td> <img src= "${arr[i].src}" alt="Ảnh sản phẩm"> </td>`;
        table = table + `<td><button class="editButtonTable" onclick='showFormEdit(${i})'>Edit</button></td>`;
        table = table + `<td><button class="deleteButtonTable" onclick='deleteIndex(${i})'>Delete</button> <button class="buybuttonTable" onclick='buyProduct(${i})'>Buy</button></td>`;
        table = table + "</tr>";

    }
    document.getElementById('show').innerHTML = table;
    console.log("aaaaaaaa " + hideDeleteFix)

    if (hideDeleteFix == 0) {
        let buy = document.querySelectorAll(".buybuttonTable");
        for (let i = 0; i < buy.length; i++) {
            buy[i].hidden = true;
        }

    } else if (hideDeleteFix == 1) {
        let edit = document.querySelectorAll(".editButtonTable");
        for (let i = 0; i < edit.length; i++) {
            edit[i].hidden = true;
        }

         let del = document.querySelectorAll(".deleteButtonTable");
        for (let i = 0; i < del.length; i++) {
            del[i].hidden = true;
        }
    }
}

createTable(arr);
// warning when adding textbox is empty
function warnning() {
    let name = document.getElementById('productName');
    let price = document.getElementById('price');
    let color = document.getElementById('color');
    let src = document.getElementById('src');
    if (name.value == "") {
        alert(" you must add product name!!!")
    } else if (price.value == "") {
        alert(" you must add price!!!")
    } else if (color.value == "") {
        alert(" you must add color!!!")
    } else if (src.value == "") {
        alert(" you must add Source!!!")
    }
}

//adding from textbox 
function adding() {
    let name = document.getElementById('productName');
    let price = document.getElementById('price');
    let color = document.getElementById('color');
    let src = document.getElementById('src');
    if (name.value == "" || price.value == "" || color.value == "" || src.value == "") {
        warnning();
    } else {
        let a = new ProductList(name.value, price.value, color.value, src.value);

        arr.push(a);

        document.getElementById('productName').value = ""
        document.getElementById('price').value = ""
        document.getElementById('color').value = ""
        document.getElementById('src').value = ""
    }
    createTable(arr);

}

// delete
function deleteIndex(index) {
    arr.splice(index, 1);
    createTable(arr);
}
// buy
function buyProduct(index) {
    buyArr.push(arr[index]);
    document.getElementById('orderList').innerHTML = `Ordering list: ${buyArr.length} products`
    showMoney();
}

// Show editing form
function showFormEdit(index) {
    document.getElementById('addingForm').innerHTML = "";
    document.getElementById('formEdit').innerHTML = `
    <h1> Form Edit</h3>
    <input type="text" placeholeder=" re-type the product name" id="editName">
    <input type="text" placeholeder=" re-type the price" id="editPrice">
    <input type="text" placeholeder=" re-type the color" id="editColor">
    <input type="text" placeholeder=" re-type the source" id="editSRC">
    <br>
    <br>
    <button class="mainButton" onclick="edit(${index})">Save</button>
    `;
    let editName = document.getElementById('editName');
    let editPrice = document.getElementById('editPrice');
    let editColor = document.getElementById('editColor');
    let editSRC = document.getElementById('editSRC');
    editName.value = arr[index].productNameFiter();
    editPrice.value = arr[index].priceFiter();
    editColor.value = arr[index].colorFiter();
    editSRC.value = arr[index].srcFiter();
    document.getElementById('editName').focus();
}

//goBack adding form 
function goBack() {
    createTable(arr);
    document.getElementById('SearchingForm').innerHTML = ""
    document.getElementById('addingForm').innerHTML = `
<input type="text" id="productName" placeholder="add product's name here"><br>
<input type="text" id="price" placeholder="add the price"><br>
<input type="text" id="color" placeholder="add the color"><br>
<input type="text" id="src" placeholder="add source of image">
<br><br>
<button id="fixingButton" class="mainButton" onclick="adding()" value="adding">Adding </button>
<button class="mainButton" id="searchButton" onclick="searchButton()">Search</button>
<h2 align="right" onclick="showOrderList()" style="padding: 0 300px 0 0;" id="orderList">Ordering list</h2>
<h2 align="right" style="padding: 0 300px 0 0;" id="showMoney"></h2>
</div>
<br>
    `
    showMoney();
    if(hideDeleteFix==1){
        document.getElementById('fixingButton').hidden=true;
        document.getElementById('productName').hidden=true;
        document.getElementById('price').hidden=true;
        document.getElementById('color').hidden=true;
        document.getElementById('src').hidden=true;

    } else {
        document.getElementById('fixingButton').hidden=false;
        document.getElementById('productName').hidden=false;
        document.getElementById('price').hidden=false;
        document.getElementById('color').hidden=false;
        document.getElementById('src').hidden=false;
    }
}

// Show Searching form & hide adding form
function searchButton() {
    document.getElementById('addingForm').innerHTML = ""
    document.getElementById('SearchingForm').innerHTML = `
    <table id="TBSearch" align="center">
    <th class='Headers'>search by product's name</th>
    <th class='Headers'>search by price</th>
    <th><Button onclick="searcher()" class="mainButton" id="searcher">Search </Button>
    <Button onclick="goBack()" class="mainButton" id="goBack">Go back adding page </Button></th>
    <tr>
        <td><select onchange="changeValueName(this)" name="" id="select1">
          <option value="None">None</option>
            <option value="IPhone" >Iphone </option>
            <option value="SamSung" >SamSung </option>
            <option value="Classic" >Classic</option>
        </select> </td>
        <td> 
            <select onchange="changeValue(this)" name="select2" id="select2">
                <option value="None">None</option>
                <option value="over2000">over 2000$</option>
                <option value="under2000"> under 2000$</option>
                <option value="under1000">under 1000$ </option>
                <option value="under500">under 500$</option>
                
            </select>
        </td>
        <td></td>
    </tr>
    
    </table>
    <h2 align="right" onclick="showOrderList()" style="padding: 0 300px 0 0;" id="orderList">Ordering list</h2>
    <h2 align="right" style="padding: 0 300px 0 0;" id="showMoney"></h2>
    `
    document.getElementById('select1').focus();
    showMoney()
}
//changeValue Name
let variantSelect1;
function changeValueName(select1) {
    variantSelect1 = select1.value;
    variantSelect2 = "none";

}

//changeValue Price
let variantSelect2;
function changeValue(select2) {
    variantSelect2 = select2.value;
    variantSelect1 = "none";

}
// clear product table
function clearProductTable() {
    document.getElementById('show').innerHTML = ""
}

// searcher function
function searcher() {
    searchButton();
    console.log(variantSelect2);
    let table = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
    table = table + "<tr class='Headers'>";
    table = table + "<td>STT</td>";
    table = table + "<td>Product's name</td>";
    table = table + "<td>Price ($)</td>";
    table = table + "<td>Color</td>";
    table = table + "<td>Image</td>";
    table = table + "</tr> <br>";
    for (let i = 0; i < arr.length; i++) {
        if (variantSelect2 == "over2000" && arr[i].priceFiter() > 2000) {
            variantSelect1 = "none";
            table = table + "<tr>";
            table = table + "<td>" + i + "</td>";
            table = table + "<td>" + arr[i].productName + "</td>";
            table = table + "<td>" + arr[i].price + "</td>";
            table = table + "<td>" + arr[i].color + "</td>";
            table = table + `<td> <img src= "${arr[i].src}" alt="Ảnh sản phẩm"> </td>`;
            table = table + `<td><button class="editButtonTable" onclick='showFormEdit(${i})'>Edit</button></td>`;
             table = table + `<td><button class="deleteButtonTable" onclick='deleteIndex(${i})'>Delete</button> <button class="buybuttonTable" onclick='buyProduct(${i})'>Buy</button></td>`;
            table = table + "</tr>";
        } else if (variantSelect2 == "under2000" && arr[i].priceFiter() < 2000) {
            variantSelect1 = "none";
            table = table + "<tr>";
            table = table + "<td>" + i + "</td>";
            table = table + "<td>" + arr[i].productName + "</td>";
            table = table + "<td>" + arr[i].price + "</td>";
            table = table + "<td>" + arr[i].color + "</td>";
            table = table + `<td> <img src= "${arr[i].src}" alt="Ảnh sản phẩm"> </td>`;
            table = table + `<td><button class="editButtonTable" onclick='showFormEdit(${i})'>Edit</button></td>`;
        table = table + `<td><button class="deleteButtonTable" onclick='deleteIndex(${i})'>Delete</button> <button class="buybuttonTable" onclick='buyProduct(${i})'>Buy</button></td>`;
            table = table + "</tr>";
        } else if (variantSelect2 == "under1000" && arr[i].priceFiter() < 1000) {
            variantSelect1 = "none";
            table = table + "<tr>";
            table = table + "<td>" + i + "</td>";
            table = table + "<td>" + arr[i].productName + "</td>";
            table = table + "<td>" + arr[i].price + "</td>";
            table = table + "<td>" + arr[i].color + "</td>";
            table = table + `<td> <img src= "${arr[i].src}" alt="Ảnh sản phẩm"> </td>`;
            table = table + `<td><button class="editButtonTable" onclick='showFormEdit(${i})'>Edit</button></td>`;
        table = table + `<td><button class="deleteButtonTable" onclick='deleteIndex(${i})'>Delete</button> <button class="buybuttonTable" onclick='buyProduct(${i})'>Buy</button></td>`;
            table = table + "</tr>";
        } else if (variantSelect2 == "under500" && arr[i].priceFiter() < 500) {
            variantSelect1 = "none";
            table = table + "<tr>";
            table = table + "<td>" + i + "</td>";
            table = table + "<td>" + arr[i].productName + "</td>";
            table = table + "<td>" + arr[i].price + "</td>";
            table = table + "<td>" + arr[i].color + "</td>";
            table = table + `<td> <img src= "${arr[i].src}" alt="Ảnh sản phẩm"> </td>`;
            table = table + `<td><button class="editButtonTable" onclick='showFormEdit(${i})'>Edit</button></td>`;
        table = table + `<td><button class="deleteButtonTable" onclick='deleteIndex(${i})'>Delete</button> <button class="buybuttonTable" onclick='buyProduct(${i})'>Buy</button></td>`;
            table = table + "</tr>";
        } else if (variantSelect1 == "IPhone" && arr[i].productNameFiter().includes(variantSelect1)) {
            variantSelect2 = "none";
            table = table + "<tr>";
            table = table + "<td>" + i + "</td>";
            table = table + "<td>" + arr[i].productName + "</td>";
            table = table + "<td>" + arr[i].price + "</td>";
            table = table + "<td>" + arr[i].color + "</td>";
            table = table + `<td> <img src= "${arr[i].src}" alt="Ảnh sản phẩm"> </td>`;
            table = table + `<td><button class="editButtonTable" onclick='showFormEdit(${i})'>Edit</button></td>`;
            table = table + `<td><button class="deleteButtonTable" onclick='deleteIndex(${i})'>Delete</button> <button class="buybuttonTable" onclick='buyProduct(${i})'>Buy</button></td>`;
            table = table + "</tr>";
        } else if (variantSelect1 == "SamSung" && arr[i].productNameFiter().includes(variantSelect1)) {
            variantSelect2 = "none";
            table = table + "<tr>";
            table = table + "<td>" + i + "</td>";
            table = table + "<td>" + arr[i].productName + "</td>";
            table = table + "<td>" + arr[i].price + "</td>";
            table = table + "<td>" + arr[i].color + "</td>";
            table = table + `<td> <img src= "${arr[i].src}" alt="Ảnh sản phẩm"> </td>`;
            table = table + `<td><button class="editButtonTable" onclick='showFormEdit(${i})'>Edit</button></td>`;
            table = table + `<td><button class="deleteButtonTable" onclick='deleteIndex(${i})'>Delete</button> <button class="buybuttonTable" onclick='buyProduct(${i})'>Buy</button></td>`;
            table = table + "</tr>";
        } else if (variantSelect1 == "Classic" && arr[i].productNameFiter().includes(variantSelect1)) {
            variantSelect2 = "none";
            table = table + "<tr>";
            table = table + "<td>" + i + "</td>";
            table = table + "<td>" + arr[i].productName + "</td>";
            table = table + "<td>" + arr[i].price + "</td>";
            table = table + "<td>" + arr[i].color + "</td>";
            table = table + `<td> <img src= "${arr[i].src}" alt="Ảnh sản phẩm"> </td>`;
            table = table + `<td><button class="editButtonTable" onclick='showFormEdit(${i})'>Edit</button></td>`;
            table = table + `<td><button class="deleteButtonTable" onclick='deleteIndex(${i})'>Delete</button> <button class="buybuttonTable" onclick='buyProduct(${i})'>Buy</button></td>`;
            table = table + "</tr>";
        }
    }
    document.getElementById('show').innerHTML = table;
    console.log("aaaaaaaa " + hideDeleteFix)

    if (hideDeleteFix == 0) {
        let buy = document.querySelectorAll(".buybuttonTable");
        for (let i = 0; i < buy.length; i++) {
            buy[i].hidden = true;
        }

    } else if (hideDeleteFix == 1) {
        let edit = document.querySelectorAll(".editButtonTable");
        for (let i = 0; i < edit.length; i++) {
            edit[i].hidden = true;
        }

         let del = document.querySelectorAll(".deleteButtonTable");
        for (let i = 0; i < del.length; i++) {
            del[i].hidden = true;
        }
    }
}


// edit index

function edit(index) {
    document.getElementById('addingForm').innerHTML = `
    <div id="addingForm" align="center">
    
    <input type="text" id="productName" placeholder="add product's name here"><br>
    <input type="text" id="price" placeholder="add the price"><br>
    <input type="text" id="color" placeholder="add the color"><br>
    <input type="text" id="src" placeholder="add source of image">
    <!-- <input type="text" id="fixItem" placeholder="Fixing products"> -->
    <br><br>
    <button id="fixingButton" class="mainButton" onclick="adding()" value="adding">Adding </button>
    <button class="mainButton" id="searchButton" onclick="searchButton()">Search</button>
    <h2 align="right" onclick="showOrderList()" style="padding: 0 300px 0 0;" id="orderList">Ordering list</h2>
    <h2 align="right" style="padding: 0 300px 0 0;" id="showMoney"></h2>
    <!-- <button class="mainButton" onclick="fixing()">Fixing many products </button> -->
    </div>
    `
    let editName = document.getElementById('editName');
    let editPrice = document.getElementById('editPrice');
    let editColor = document.getElementById('editColor');
    let editSRC = document.getElementById('editSRC');
    arr[index].setName(editName.value);
    arr[index].setPrice(editPrice.value);
    arr[index].setColor(editColor.value);
    arr[index].setSRC(editSRC.value);
    document.getElementById('formEdit').innerHTML = "";
    createTable(arr);
    showMoney()
}
//show Money number in H2 

function showMoney() {
    let sumMoney = 0;
    for (let i = 0; i < buyArr.length; i++) {
        sumMoney = sumMoney + parseInt(buyArr[i].priceFiter());
    }
    document.getElementById('showMoney').innerHTML = `You are speeding ${sumMoney}$`
    document.getElementById('orderList').innerHTML = `Ordering list: ${buyArr.length} products`
}

//show order list

function showOrderList() {
    clearProductTable()
    console.log(buyArr);
    let table = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
    table = table + "<tr class='Headers'>";
    table = table + "<td>STT</td>";
    table = table + "<td>Product's name</td>";
    table = table + "<td>Price ($)</td>";
    table = table + "<td>Color</td>";
    table = table + "<td>Image</td>";
    table = table + "</tr> <br>";
    for (let i = 0; i < buyArr.length; i++) {
        table = table + "<tr>";
        table = table + "<td>" + i + "</td>";
        table = table + "<td>" + buyArr[i].productName + "</td>";
        table = table + "<td>" + buyArr[i].price + "</td>";
        table = table + "<td>" + buyArr[i].color + "</td>";
        table = table + `<td> <img src= "${buyArr[i].src}" alt="Ảnh sản phẩm"> </td>`;
        table = table + `<td><button class="deleteButtonTable" align="center" style="width: 200px" onclick='cancelOrdering(${i})'>Cancle ordering</button></td>`;
        table = table + "</tr>";
    }
    document.getElementById('show').innerHTML = table;
}
// Cancel Ordering
function cancelOrdering(index) {
    buyArr.splice(index, 1);
    showOrderList();
    document.getElementById('orderList').innerHTML = `Ordering list: ${buyArr.length} products`
    showMoney();
}

// Login form
function hideAll() {
    document.getElementById('showMainPage').innerHTML = ""
}
hideAll();

// Show Login form
function showLoginForm() {
    document.getElementById('loginToMainPage').innerHTML = `
    <h1 align="center" style="padding: 0 0 0 450px"> Login Form</h3>
    <input style="width: 30%" type="text" placeholeder="User name" id="userName"><br>
    <input style="width: 30%" type="password" placeholeder="Password" id="passWord">
    <br>
    <br>
    <button class="mainButton" onclick='logInToMainPage()'>Login</button>
    `
}
showLoginForm();

// Show MainPage
function ShowMainPage() {
    document.getElementById('showMainPage').innerHTML = `
    <div align="center" id="formEdit"></div>
        <div align="center" id="SearchingForm">
        </div>
        <div id="addingForm" align="center">
            <input type="text" id="productName" placeholder="add product's name here"><br>
            <input type="text" id="price" placeholder="add the price"><br>
            <input type="text" id="color" placeholder="add the color"><br>
            <input type="text" id="src" placeholder="add source of image">
            <!-- <input type="text" id="fixItem" placeholder="Fixing products"> -->
            <br><br>
            <button id="fixingButton" class="mainButton" onclick="adding()" value="adding">Adding </button>
            <button class="mainButton" id="searchButton" onclick="searchButton()">Search</button>
            <h2 align="right" onclick="showOrderList()" style="padding: 0 300px 0 0;" id="orderList">Ordering list</h2>
            <h2 align="right" style="padding: 0 300px 0 0;" id="showMoney"></h2>
            <!-- <button class="mainButton" onclick="fixing()">Fixing many products </button> -->
        </div>
        <br>
        <h1>Products list</h1>
        <table id="show">
        </table>
    `
}

// Check Login performance
function logInToMainPage() {
    let userName = document.getElementById('userName');
    let passWord = document.getElementById('passWord');
    let flag = false;
    if (userName.value == arrLog[0].account && passWord.value == arrLog[0].pass) {
        hideDeleteFix = 0;
        console.log(hideDeleteFix);
    } else {
        hideDeleteFix = 1;

    }

    for (let i = 0; i < arrLog.length; i++) {
        if (userName.value == arrLog[i].account && passWord.value == arrLog[i].pass) {

            document.getElementById('loginToMainPage').innerHTML = ""
            ShowMainPage();
            createTable(arr);
            showMoney();
            showlogout();
            flag = true;
            break;
        } else {
            flag = false;
        }
    }
    if (flag == false) {
        alert("your account or password is incorrect");
        flag = false;
        hideDeleteFix = 0;
    }
    userName.value = ""
    passWord.value = ""
    console.log("LLL " + hideDeleteFix);

    if(hideDeleteFix==1){
        document.getElementById('fixingButton').hidden=true;
        document.getElementById('productName').hidden=true;
        document.getElementById('price').hidden=true;
        document.getElementById('color').hidden=true;
        document.getElementById('src').hidden=true;

    } else {
        document.getElementById('fixingButton').hidden=false;
        document.getElementById('productName').hidden=false;
        document.getElementById('price').hidden=false;
        document.getElementById('color').hidden=false;
        document.getElementById('src').hidden=false;
    }
}


// Show logout button
function showlogout() {
    document.getElementById('logout').innerHTML = `
    <button class="mainButton" align="right" onclick="goBackLogin()" id="logout">Logout</button>
    `
}

// hide logout button
function hidelogout() {
    document.getElementById('logout').innerHTML = ""
}
hidelogout();

// goBackLogin()
function goBackLogin() {
    hideAll();
    showLoginForm();
    hidelogout();
    buyArr=[];
}

// Chạy banner
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

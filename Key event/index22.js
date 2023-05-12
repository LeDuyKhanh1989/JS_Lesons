
let nobita = null;
nobita = document.getElementById('nobita');
console.log(nobita);
function khaiBaoViTriXY() {
    nobita.style.position = 'absolute'; //gọi ra thuộc tính relative của ball
    nobita.style.left = '0px'; //gán vị trí của ball là giá trị left = 0px
    nobita.style.top = '0px';
}

function downMoving() {
    nobita.style.top = parseInt(nobita.style.top) - 10 + 'px';
}
function rightMoving() {
    nobita.style.left = parseInt(nobita.style.left) - 10 + 'px';
}
function upMoving() {
    nobita.style.top = parseInt(nobita.style.top) + 10 + 'px';
}
function leftMoving() {
    nobita.style.left = parseInt(nobita.style.left) + 10 + 'px';
}

// tạo hàm lựa chọn cách di chuyển dựa trên các trường hợp khác nhau
function keyBoardChoosing(evt) //Khai báo hàm chạy thuộc tính event
{
    switch (evt.keyCode // evt.keyCode để lấy số thứ tự của bàn phím (Ví dụ: bấm phím mũi tên trái =37, trên =38, phải=39, dưới =40)
    ) {
        case 37:
            leftMoving();
            break;
        case 38:
            upMoving();
            break;
        case 39:
            rightMoving();
            break;
        case 40:
            downMoving();
            break;
    }

}
//Gọi hàm khai báo vị trí của đối tượng
window.onload = khaiBaoViTriXY;
// tạo hàm đọc thuộc tính 'keydown' của window
window.addEventListener('keydown', keyBoardChoosing);

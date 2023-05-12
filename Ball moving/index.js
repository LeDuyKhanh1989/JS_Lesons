let ball = null; // Khai báo 1 biến rỗng có tên là ball
ball = document.getElementById('ball'); //Gán ball là cái ảnh có tên Id là ball trong html
// Hàm khai báo vị trí hiện trước khi chạy chương trình của ball
function khaiBaoViTri() {
    ball = document.getElementById('ball');
    ball.style.position = 'relative'; //gọi ra thuộc tính relative của ball
    ball.style.left = '0px'; //gán vị trí của ball là giá trị left = 0px
}
function ballMoving() {
    ball.style.left = parseInt(ball.style.left) + 10 + 'px'; //nếu click vào nút button thì ball di chuyển 10px 1 lần
}
window.onload = khaiBaoViTri;// onload sử dụng khi 1 chương trình nhẽ ra phải chạy tuần tự từng bước, nhưng onload cho phép đảo vị trí các bước để chạy chương trình.

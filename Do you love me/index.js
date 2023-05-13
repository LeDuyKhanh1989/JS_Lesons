function clickYes(){
    alert("Bạn đã lựa chọn chính xác!!!");
}

function viTri()
 {
    let no=document.getElementById('no');
    x=Math.random() *100;
    y=Math.random() *100;
    no.style.position = "absolute";
    no.style.left = x+"px";
    no.style.top = y+"px";

}
function mouseOver(){
    let no=document.getElementById('no');
    x=Math.random() *2000;
    y=Math.random() *2000;
    no.style.position = 'absolute';
    no.style.left = x+"px";
    no.style.top = y+"px";

}
window.onload= viTri;
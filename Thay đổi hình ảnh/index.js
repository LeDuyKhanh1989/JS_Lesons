index =0;
function click1(){
   
    let a=["../mk1.jpg","../panda1.jpg","../cat1.jpg"];
    document.getElementById('anh1').src=a[index];
    index++;
    if (index>2){
        index=0;
    }
    console.log("link 1 đã chạy")
    console.log(document.getElementById('anh1').src)
    }

function click2(){
    let b=["../mk2.jpg","../panda2.jpg","../cat2.jpg"];
    document.getElementById('anh2').src=b[index];
    index++;
    if (index>2){
        index=0;
    }
    console.log("Link 2 đã chạy")
}

function click3(){
    let c=["../mk3.jpg","../panda3.jpg","../cat3.jpg"];
    document.getElementById('anh3').src=c[index];
    index++;
    if (index>2){
        index=0;
    }
    console.log("Link 3 đã chạy")

}

function click4(){
    let d=["../mk4.jpg","../panda4.jpg","../cat4.jpg"];
    document.getElementById('anh4').src=d[index];
    index++;
    if (index>2){
        index=0;
    }
    console.log("Link 4 đã chạy")
}

function click5(){
    let e=["../mk5.jpg","../panda5.jpg","../cat5.jpg"];
    document.getElementById('anh5').src=e[index];
    index++;
    if (index>2){
        index=0;
    }
    console.log("Link 5 đã chạy")
}
function chay() {
    alert("I can not find out the way to complete the part2. :'(")
    /*
    chuoi=document.getElementById('anh1').src+document.getElementById('anh2').src+document.getElementById('anh3').src+document.getElementById('anh4').src+document.getElementById('anh5').src;
    console.log(chuoi);
    let mangA=["../mk1.jpg","../mk2.jpg","../mk3.jpg","../mk4.jpg","../mk5.jpg"]
    let a1= document.getElementById('anh1');
    let b1=document.getElementById('anh2');
    let c1=document.getElementById('anh3');
    let d1=document.getElementById('anh4');
    let e1=document.getElementById('anh5');
    a1.style.src=mangA[0];
    b1.style.src=mangA[1];
    c1.style.src=mangA[2];
    d1.style.src=mangA[3];
    e1.style.src=mangA[4];
    if(chuoi==a1+b1+c1+d1+e1) {
        alert("Bạn đã tìm ra con khỉ")
    }
    let a1=["../mk1.jpg","../mk2.jpg","../mk3.jpg","../mk4.jpg","../mk5.jpg"];
    let b1=["../panda1.jpg","../panda2.jpg","../panda3.jpg","../panda4.jpg","../panda5.jpg"];
    let c1=["../cat1.jpg","../cat2.jpg","../cat3.jpg","../cat4.jpg","../cat5.jpg"];
    let a=document.getElementById('anh1');
    let b=document.getElementById('anh2');
    let c=document.getElementById('anh3');
    let d=document.getElementById('anh4');
    let e=document.getElementById('anh5');
    if(a.src==a[0]&&b.src==a[1]&&c.src==a[2]&&d.src==a[3]&&e.src==a[4]){
        alert("Bạn đã  chọn được the Monkey")
    } else {
        alert("Sai rồi, Hãy chọn đúng");
    }  
    */
}
window.onload= chay;
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
    window.onclick=chay;
    }

function click2(){
    let b=["../mk2.jpg","../panda2.jpg","../cat2.jpg"];
    document.getElementById('anh2').src=b[index];
    index++;
    if (index>2){
        index=0;
    }
    console.log("Link 2 đã chạy")
    window.onclick=chay;
}

function click3(){
    let c=["../mk3.jpg","../panda3.jpg","../cat3.jpg"];
    document.getElementById('anh3').src=c[index];
    index++;
    if (index>2){
        index=0;
    }
    console.log("Link 3 đã chạy")
    window.onclick=chay;

}

function click4(){
    let d=["../mk4.jpg","../panda4.jpg","../cat4.jpg"];
    document.getElementById('anh4').src=d[index];
    index++;
    if (index>2){
        index=0;
    }
    console.log("Link 4 đã chạy")
    window.onclick=chay;
}

function click5(){
    let e=["../mk5.jpg","../panda5.jpg","../cat5.jpg"];
    document.getElementById('anh5').src=e[index];
    index++;
    if (index>2){
        index=0;
    }
    console.log("Link 5 đã chạy")
    window.onclick=chay;
}
function chay() {
    let mangA=["http://127.0.0.1:5500/mk1.jpg","http://127.0.0.1:5500/mk2.jpg","http://127.0.0.1:5500/mk3.jpg","http://127.0.0.1:5500/mk4.jpg","http://127.0.0.1:5500/mk5.jpg"];
    let mangB=["http://127.0.0.1:5500/cat1.jpg","http://127.0.0.1:5500/cat2.jpg","http://127.0.0.1:5500/cat3.jpg","http://127.0.0.1:5500/cat4.jpg","http://127.0.0.1:5500/cat5.jpg"];
    let mangC=["http://127.0.0.1:5500/panda1.jpg","http://127.0.0.1:5500/panda2.jpg","http://127.0.0.1:5500/panda3.jpg","http://127.0.0.1:5500/panda4.jpg","http://127.0.0.1:5500/panda5.jpg"];
    let anh1= document.getElementById('anh1').src;
    console.log(anh1);

    let anh2=document.getElementById('anh2').src;
    console.log(anh2);
    let anh3=document.getElementById('anh3').src;
    console.log(anh3);
    let anh4=document.getElementById('anh4').src;
    console.log(anh4);
    let anh5=document.getElementById('anh5').src;
    console.log(anh5);
    if(anh1==mangA[0]&&anh2==mangA[1]&&anh3==mangA[2]&&anh4==mangA[3]&&anh5==mangA[4]){
        alert("Bạn đã tìm ra con Khỉ")
    } else 
    if(anh1==mangB[0]&&anh2==mangB[1]&&anh3==mangB[2]&&anh4==mangB[3]&&anh5==mangB[4]){
        alert("Bạn đã tìm ra con Mèo")
    }else 
    if (anh1==mangC[0]&&anh2==mangC[1]&&anh3==mangC[2]&&anh4==mangC[3]&&anh5==mangC[4]){
        alert("Bạn đã tìm ra con Gấu Trúc")
    }
    esle 
    {
        console.log("Ghép ảnh chưa đúng")
    }
    
}

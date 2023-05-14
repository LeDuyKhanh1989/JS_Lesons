console.log("hello JS")

function tinhTien(){
    console.log("hàm tinhTien đã chạy")
    let soTienGui=parseFloat(document.getElementById('soTienGui').value);
    let soThang=parseInt(document.getElementById('soThang').value);
    const laiXuat=parseFloat(document.getElementById('laiXuat').value);
    
    
    let i=0;
    for(i=1;i<=soThang;i++){
        
        let tienlai1thang=(soTienGui*(laiXuat/12));
        console.log("in ra tiền lãi 1 tháng: "+tienlai1thang);
        soTienGui=soTienGui+tienlai1thang;

    }
    document.getElementById('ht').innerHTML=soTienGui;

/*
    let soThang=document.getElementById('soThang');
    if(soThang.style.value="")
    {
        console.log("hãy nhập vào số tháng cần gửi")
    }
    

    if(soTienGui==""){
        document.getElementById('ht').innerHTML="Bạn chưa nhập đủ thông tin";
    } else{
          let tienlai1thang= (laiXuat*soTienGui)/12;
            i=0;
            for(i=1;i<soThang;i+1){
                soTienGui=soTienGui+tienlai1thang;
            }
            console.log(soTienGui.style.value);
    }
*/
}
window.addEventListener('onclick',tinhTien);



function xemKq(){
    let nam= document.getElementById('nam').value;
    let x=nam%1000;
    if(nam>2099) {
        document.getElementById('ht').innerHTML="Tương lai quá xa, Nhập lại đi!!"
    } else
    if(nam==100||nam==200||nam==300||nam==500||nam==600||nam==700||nam==900||nam==1100||nam==1000||nam==1300||nam==1400||nam==1500||nam==1700||nam==1800||nam==1900)
    {
    document.getElementById('ht').innerHTML="Năm " + nam + " không phải là năm nhuận!";
    }
    else if(x%4==0){
    document.getElementById('ht').innerHTML="Năm " + nam + " là năm nhuận!"; 
    } 
    else {
    document.getElementById('ht').innerHTML="Năm " + nam + " không phải là năm nhuận!";
    }
}
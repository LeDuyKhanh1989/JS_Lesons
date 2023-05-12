let canNang= document.getElementById('canNang');
let chieuCao= document.getElementById('chieuCao');

function xemKetQua(){
    let bmi= null;
    bmi=(canNang.value / chieuCao.value)/0.01671596;
    console.log(bmi);
    if(bmi>30){
        document.getElementById('ht').innerHTML= "Obese";
    }
    else if( bmi>25) {
        document.getElementById('ht').innerHTML= "Overweight";
    } else if( bmi>18){
        document.getElementById('ht').innerHTML= "Normal";
    } else {
        document.getElementById('ht').innerHTML= "Underweight";
    }
}
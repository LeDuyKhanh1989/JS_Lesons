
function cong() {
    var gt1= parseInt( document.getElementById('gt1').value);
    var gt2= parseInt( document.getElementById('gt2').value);
    var result=gt1+gt2;
    console.log(result);
    document.getElementById('ht').innerHTML= result;
}
function tru() {
    var gt1= parseInt( document.getElementById('gt1').value);
    var gt2= parseInt( document.getElementById('gt2').value);
    var result=gt1-gt2;
    console.log(result);
    document.getElementById('ht').innerHTML= result;
}
function nhan() {
    var gt1= parseInt( document.getElementById('gt1').value);
    var gt2= parseInt( document.getElementById('gt2').value);
    var result=gt1*gt2;
    console.log(result);
    document.getElementById('ht').innerHTML= result;
}
function chia() {
    var gt1= parseInt( document.getElementById('gt1').value);
    var gt2= parseInt( document.getElementById('gt2').value);
    var result=gt1/gt2;
    console.log(result);
    document.getElementById('ht').innerHTML= result;
}

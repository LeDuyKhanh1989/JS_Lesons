console.log("hello JS")
function check(){
    let input= document.getElementById('input').value;
console.log(input);

    
switch (input){
    case '1':
    case '3':
    case '5':
    case '7':
    case '8':
    case '10':
    case '12':
        document.getElementById('inKQ').innerHTML="31 ngày";
        break;
    case '2':
        document.getElementById('inKQ').innerHTML="28 ngày";
    break;
    case '4':
    case '6':
    case '9':
    case '11':
        document.getElementById('inKQ').innerHTML="30 ngày";
    break;

}
}



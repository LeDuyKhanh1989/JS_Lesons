let userName = prompt("Who's there?", '');
if (userName == 'Admin') {
    //code vào đây
    alert("Welcome");
} else if (userName == null) {
    alert('Canceled');
} else {
    alert("I don't know you");
}
let pass = prompt('Password?', '');
if (userName == 'Admin') {
    let pass = prompt('Password?', '');
    if (pass == 'TheMaster') {
    	alert('Welcome!');
    } else if (pass == null) {
        alert('Canceled.');
    } else {
        alert('Wrong password');
    }
} else if (userName == null) {
    alert('Canceled');
} else {
    alert("I don't know you");
}
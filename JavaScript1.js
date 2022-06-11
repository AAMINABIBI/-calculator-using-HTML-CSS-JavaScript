
    var string = "";
function func1(num) {
    if (num == '=') {
        string = eval(string);
        document.querySelector('input').value = string;
    }
    else {
        string = string + num;
        document.querySelector('input').value = string;
    }
}
       

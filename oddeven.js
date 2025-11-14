function oddeven(){
    let number = parseInt(prompt("Enter a number:"));
    if(number % 2 == 0){
        document.write("<h1>"+"The number is even.");
    }
    else if (number == 0){
        document.write("<h1>"+"Number is Zero.");
    }
    else{
        document.write("<h1>"+"The number is odd.");
    }
}
oddeven();
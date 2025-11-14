function voating(){
    var age = parseInt(prompt("Enter your age:"));
    if(age>=18){
        document.write("<h1>"+"You are eligible to vote.");
    }
    else{
        document.write("<h1>"+"You are not eligible to vote.");
    }
}
voating();

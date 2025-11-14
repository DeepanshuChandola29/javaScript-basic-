function positivenegative(){
    let number=parseInt(prompt("Enter a number:"));
    if(number>0){
        document.write("<h1>"+"The number is positive.");
    }
    else if(number<0){
        document.write("<h1>"+"The number is negative.");
    }
    else{
        document.write("<h1>"+"The number is zero.");
    }
}



positivenegative();
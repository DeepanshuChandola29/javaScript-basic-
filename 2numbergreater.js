function greater(){
    let a= parseInt(prompt("Enter first number:"));
    let b= parseInt(prompt("Enter second number:"));
    if(a>b){
        document.write("<h1>"+"The greater number is: "+a);
    }
    
    else if(b>a){
        document.write("<h1>"+"The greater number is: "+b);
    }
    else if(a=b==0){
        document.write("<h1>"+"Both numbers are zero.");
    }
    else{
        document.write("<h1>"+"Both numbers are equal.");
    }
}
greater();
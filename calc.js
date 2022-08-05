var result=document.getElementById("result");

result.addEventListener("keypress", function(event) {
    if (event.key === "Enter"){
        event.preventDefault();
        SVGFEConvolveMatrixElement();
    }
    if (event.key === "C"  || event.key === "c" ){
        event.preventDefault();
        clearScreen();
    }
});
document.addEventListener("keypress", function(event){
    if (event.key === "C"  || event.key === "c" ){
        event.preventDefault();
        clearScreen();
    }
});
function display(val){
    document.getElementById('result').value+= val
    return val
}
function solve(){
    let x = document.getElementById('result').value
    let y = eval(x);
    document.getElementById('result').value= y
    return y
}
function clearScreen(){
    document.getElementById('result').value='';
}
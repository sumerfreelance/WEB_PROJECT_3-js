let count = 0;
document.getElementById("Increment").onclick = function(){
    count+=1;
    document.getElementById("title").innerHTML = count;
}
document.getElementById("Reset").onclick = function(){
    count = 0;
    document.getElementById("title").innerHTML = count;
}
document.getElementById("Decrement").onclick = function(){
    count-=1;
    document.getElementById("title").innerHTML = count;
}
var count =0;
document.getElementById("value").textContent =count;
var reset = document.getElementById("reset");

function increase(){
    count = count +1;
    document.getElementById("value").textContent=count;
    if(count>0){
        document.getElementById("value").style.color="green";
    }else{
        document.getElementById("value").style.color="green"
    }
}
function decrease(){
    count = count -1;
    document.getElementById("value").textContent=count;
    if(count<0){
        document.getElementById("value").style.color="red";
    }else{
        document.getElementById("value").style.color="red"
    }
}
reset.addEventListener("click",() =>{
    count=0;
    document.getElementById("value").textContent=count;
    if(count=0){
        document.getElementById("value").style.color="blue";
    }else{
        document.getElementById("value").style.color="blue"
    }
})
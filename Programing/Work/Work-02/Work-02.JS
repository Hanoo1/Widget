const redDisk = document.querySelector("#f1")
const greenDisk = document.querySelector("#f2")
const blueDisk = document.querySelector("#f3")
const warning = document.querySelector(".p")

let clickState = 0;

let Sequence = 0;






redDisk.addEventListener("click",function(){
    if (clickState==0){
        shiftRedDisk();
        clickState=1;
    }
    else {
        putRedDisk();
        clickState=0;
    }
})
greenDisk.addEventListener("click",function(){
    shiftGreenDisk();
})
blueDisk.addEventListener("click",function(){
    shiftBlueDisk();
})
    
if (clickState==1){
    redDisk.addEventListener("click",function(){
        putRedDisk();
    })
}



function shiftRedDisk(){
    redDisk.style.backgroundColor="transparent"
}
function shiftGreenDisk(){
    greenDisk.style.backgroundColor="transparent"
    clickState+=1
}
function shiftBlueDisk(){
    blueDisk.style.backgroundColor="transparent"
    clickState+=1
}
function putRedDisk(){
    redDisk.style.backgroundColor="red"
    clickState=clickState-1
}
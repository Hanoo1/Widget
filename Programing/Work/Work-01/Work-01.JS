const slots = document.querySelectorAll(".slot")
let currentIndex=0; //채운칸 기억하기

document.querySelector(".Red").addEventListener("click",function(){
    fillSlot("red");
})

document.querySelector(".Orange").addEventListener("click",function(){
    fillSlot("orange");
})

document.querySelector(".Yellow").addEventListener("click",function(){
    fillSlot("yellow");
})

document.querySelector(".Green").addEventListener("click",function(){
    fillSlot("green");
})

document.querySelector(".Blue").addEventListener("click",function(){
    fillSlot("blue");
})

document.querySelector(".Navy").addEventListener("click",function(){
    fillSlot("navy");
})

document.querySelector(".Purple").addEventListener("click",function(){
    fillSlot("purple");
})
document.querySelector(".rebtn").addEventListener("click", function(){
    eraseslot();
})



function fillSlot(color){
    if (currentIndex < slots.length){
        slots[currentIndex].style.backgroundColor=color;
        currentIndex++;
    }
}

function eraseslot(){
    slots[0].style.backgroundColor="transparent"
    slots[1].style.backgroundColor="transparent"
    slots[2].style.backgroundColor="transparent"
    slots[3].style.backgroundColor="transparent"
    slots[4].style.backgroundColor="transparent"
    slots[5].style.backgroundColor="transparent"
    slots[6].style.backgroundColor="transparent"

    currentIndex=0;
}

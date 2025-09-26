//div 불러오기
const alanine = document.getElementById("1");
const arginine = document.getElementById("2");
const asparagine = document.getElementById("3");
const asparticAcid = document.getElementById("4");
const cysteine = document.getElementById("5");
const glutaminAcid = document.getElementById("6");
const glutamine = document.getElementById("7");
const glysine = document.getElementById("8");
const histidine = document.getElementById("9");
const isoleucine = document.getElementById("10");
const leucine = document.getElementById("11");
const lysine = document.getElementById("12");
const methionine = document.getElementById("13");
const phenylalanine = document.getElementById("14");
const proline = document.getElementById("15");
const serine = document.getElementById("16");
const threonine = document.getElementById("17");
const tryptophan = document.getElementById("18");
const tyrosine = document.getElementById("19");
const valine = document.getElementById("20");

//img 불러오기
const imgAlanine = document.getElementById("alanine")
const imgArginine = document.getElementById("arginine")
const imgAsparagine = document.getElementById("asparagine")
const imgAsparticAcid = document.getElementById("aspartic_acid")
const imgCysteine = document.getElementById("cysteine")
const imgGlutamincAcid = document.getElementById("glutaminc_acid")
const imgGlutamine = document.getElementById("glutamine")
const imgGlysine = document.getElementById("glysine")
const imgHistidine = document.getElementById("histidine")
const imgIsoleucine = document.getElementById("isoleucine")
const imgLeucine = document.getElementById("leucine")
const imgLysine = document.getElementById("lysine")
const imgMethionine = document.getElementById("methionine")
const imgPhenylalanine = document.getElementById("phenylalanine")
const imgProline = document.getElementById("proline")
const imgSerine = document.getElementById("serine")
const imgThreonine = document.getElementById("threonine")
const imgTryptophan = document.getElementById("tryptophan")
const imgTyrosine = document.getElementById("tyrosine")
const imgValine = document.getElementById("valine")

//본문 불러오기
const p = document.getElementById("p")

//modal 불러오기
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content")


//eventListener
alanine.addEventListener("click",()=> {
    modal.style.display="block";
    imgAlanine.src="사진모음/alanine.png"
    p.innerText="Alanine/알라닌"
});
arginine.addEventListener("click",()=> {
    modal.style.display="block";
    imgAlanine.src="사진모음/arginine.png"
    p.innerText="Arginine/아르기닌"
});
asparagine.addEventListener("click",()=>{
    modal.style.display="block";
    imgAlanine.src="사진모음/asparagine.png"
    p.innerText="Asparagine/아스파라진"
});
asparticAcid.addEventListener("click",()=>{
    modal.style.display="block";
    imgAlanine.src="사진모음/aspartic_acid.png"
    p.innerText="Asparatic Acid/아스파르트산"
});
cysteine.addEventListener("click",()=>{
    modal.style.display="block";
    imgAlanine.src="사진모음/cysteine.png";
    p.innerText="Cysteine/시스테인"
})
glutaminAcid.addEventListener("click",()=>{
    modal.style.display="block";
    imgAlanine.src="사진모음/glutaminc_acid.png";
    p.innerText="Glutaminc Acid/글루탐산";
})



window.addEventListener("click",(e)=> {
    if (e.target === modal){
        modal.style.display="none";
    }
})


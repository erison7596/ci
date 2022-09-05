//parte do pre-requisito
let primeiro;
var troca = 0;
var nome;
function preRequisito(e){
    if(troca == 1){
        nome[0].style.backgroundColor = "white";
        nome[0].style = "border: 1px solid #777;";
        nome[0].style = " color: black;border-left-width: 5px; border-right-width: 5px; border-radius: 3px;";
        troca = 0;
    }
   // document.getElementsByClassName("e").style.backgroundColor = "green";
   primeiro = document.getElementsByClassName(e);
    primeiro[0].style = "background-color: #5cb85c;color: white; border: 1px solid #5cb85c; border-left-width: 5px; border-right-width: 5px; border-radius: 3px;";
    troca = 1;
    nome = primeiro;

}

//parte do slide
let count = 1;
document.getElementById("radio1").checked = true;
setInterval( function(){
    nextImage()
}, 5000)


function nextImage(){
    count++;
    if(count>4){
        count=1;
    }
    document.getElementById("radio"+count).checked = true;
}
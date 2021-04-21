var Paragraph=[]
function Para1(){
    for(var j=1;j<=5;j++){
var New1= document.getElementById("N"+j).value;
console.log(New1)
Paragraph.push(New1+"<br>");
    }
    console.log(Paragraph)
    document.getElementById("lines").innerHTML=Paragraph
    document.getElementById("P1").style.display = "none"
            
}
var Paragraph2=[]
function Para2(){
    for(var j=1;j<=5;j++){
var New2= document.getElementById("N"+j).value;
console.log(New2)
Paragraph2.push(New2+"<br>");
    }
    console.log(Paragraph2)
    document.getElementById("lines").innerHTML=Paragraph2
    document.getElementById("P2").style.display = "none"
            
}
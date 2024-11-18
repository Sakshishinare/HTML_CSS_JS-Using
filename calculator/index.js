 function display(value){
    document.getElementById('result').value+=value
 }
 function ClearScreen(){
    document.getElementById('result').value=""
 }
 function calculate(value){
    var p=document.getElementById('result').value
    var q=eval(p)
    document.getElementById('result').value=q
 }
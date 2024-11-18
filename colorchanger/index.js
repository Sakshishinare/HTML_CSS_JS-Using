var colors=["green","red","white","blue","orange","pink"]
var len=colors.length-1
var buttonControl=document.getElementById('btn')
var SpanControl=document.querySelector('.color')


buttonControl.addEventListener('click',()=>{
    var index=generateRandomnumber()
    //console.log(index)
    document.body.style.backgroundColor=colors[index]
    SpanControl.textContent=colors[index]
})

function generateRandomnumber(){
    return Math.round(Math.random()*len)
}
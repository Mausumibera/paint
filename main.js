var mouseevent="empty"
var lastx,lasty
canvas =document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
colour ="violet"
widthofline=1
canvas.addEventListener("mousedown",mymousedown)
function mymousedown (e)
{
colour =document.getElementById("colour").value
widthofline =document.getElementById("width").value
mouseevent="mousedown"
}
canvas.addEventListener("mousemove",mymousemove)
function mymousemove (e)
{
currentx=e.clientX-canvas.offsetLeft
currenty=e.clientY-canvas.offsetTop
if(mouseevent=="mousedown"){
    ctx.beginPath()
    ctx.strokeStyle=colour
    ctx.lineWidth=widthofline
    ctx.moveTo(lastx,lasty)
    ctx.lineTo(currentx,currenty)
    ctx.stroke()
}
lastx=currentx
lasty=currenty
}
canvas.addEventListener("mouseup",mymouseup)
function mymouseup (e)
{

mouseevent="mouseup"
}
canvas.addEventListener("mouseleave",mymouseleave)
function mymouseleave (e)
{

mouseevent="mouseleave"
}
function cleararea ()
{
    ctx.clearRect(0,0,canvas.width,canvas.height)
}
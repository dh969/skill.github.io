document.querySelector('.close').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.close').style.display='none';
    }
    else{setTimeout(()=>{
        document.querySelector('.close').style.display='inline'},350);
        document.querySelector('.ham').style.display='none';
    }
})
engg.style.display='block';
twelve.style.display='none';
ten.style.display='none';
function func(){
if(cars.value=="engg"){
engg.style.display='block';
twelve.style.display='none';
ten.style.display='none';
}
else if(cars.value=="ten"){
ten.style.display='block';
engg.style.display='none';
twelve.style.display='none';
}
else if(cars.value=="twelve"){
twelve.style.display='block';
engg.style.display='none';
ten.style.display='none';
}
}

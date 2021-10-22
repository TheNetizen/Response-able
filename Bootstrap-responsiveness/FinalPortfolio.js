//active class on navbar
let elem=document.querySelectorAll('ul li a')
for(let i of elem){
i.addEventListener('click',function(){
    let h=document.getElementsByClassName('active')
    for(let g of h){
        g.classList.remove('active')
    }
    i.classList.add('active')
})
}

//navbar scroll effect
window.addEventListener('scroll',function(){
    let nav1=document.querySelector('nav')
    nav1.classList.toggle('navbar-light',window.scrollY>0)  
    nav1.classList.toggle('bg-light',window.scrollY>0)
    nav1.classList.toggle('navbarme',window.scrollY>0)
    document.getElementById("tog").classList.toggle('ico',window.scrollY>0)
})

//typed text effect of home page 
const textArray=["Front end Developer","UI Developer","Web App Developer","Mean/Mern Developer"]
const eleSpan=document.querySelector('.typed-text')
typingDelay=100;
erasingDelay=50;
transDelay=2000;
let textArrayIndex=0;
let charArrayIndex=0;
function erase(){
    if(charArrayIndex){
        
        eleSpan.textContent=textArray[textArrayIndex].substring(0,charArrayIndex-1)
        charArrayIndex--
        setTimeout(erase,erasingDelay)
    }else{
        textArrayIndex++;
   
        if(textArrayIndex>textArray.length-1){
           
            textArrayIndex=0;
            
        }
        setTimeout(type,typingDelay+1100)
    }
    
}
function type(){
    
    if(charArrayIndex<textArray[textArrayIndex].length){
    eleSpan.textContent+=textArray[textArrayIndex].charAt(charArrayIndex)
    charArrayIndex++;
    setTimeout(type,typingDelay)
    }
    else{
        setTimeout(erase,transDelay)
    }
}
document.addEventListener("DOMContentLoaded",function(){
    setTimeout(type(),1000 )
})

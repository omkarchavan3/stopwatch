let hours = 0o0 ;
let minutes = 0o0 ;
let seconds = 0o0 ;

let  gethours = document.querySelector("#hours")
let  getminutes = document.querySelector("#minutes")
let  getseconds = document.querySelector("#seconds")

let start = document.querySelector("#start")
let pause = document.querySelector("#pause")
let restart = document.querySelector("#restart")
let interval ;

start.addEventListener("click",()=>{
 interval  = setInterval(starttime,1000)
})
pause.addEventListener("click",()=>{
    clearInterval(interval)
})
restart.addEventListener("click",()=>{
    clearInterval(interval)
    let hours = "00" ;
    let minutes = "00" ;
    let seconds = "00" ;
    getseconds.innerHTML = seconds
    getminutes.innerHTML = minutes
    gethours.innerHTML = hours 
})


function starttime(){
    seconds++
    if(seconds<=9){
        getseconds.innerHTML = '0' + seconds
    }
    if(seconds>9){
        getseconds.innerHTML = seconds
    }
    if(seconds>59){
        minutes++
        getminutes.innerHTML = '0'+ minutes
        seconds = 0
        getseconds.innerHTML = '0' + 0
    }
    if(minutes>9){
        getminutes.innerHTML = minutes
    }
    if(minutes>59){
        hours++
        gethours.innerHTML = '0'+ hours
        minutes = 0
        seconds = 0
        getseconds.innerHTML = '0' + 0
        getminutes.innerHTML = '0' + 0
    }
    if(hours>9){
        gethours.innerHTML = hours 
    }
}
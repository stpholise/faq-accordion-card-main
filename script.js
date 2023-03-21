const btns = document.querySelectorAll(".quest")
const answer =  document.querySelectorAll(".answer")

btns.forEach((btn)=>{
btn.addEventListener("click",(e)=>{
    removeAtv()
    removeShow()
    const crntEvent = e.currentTarget
    const btnClass = e.currentTarget.classList
    btnClass.add("atv")
    crntEvent.nextElementSibling.classList.add("show")
    crntEvent.addEventListener("click",(e)=>{

        if( btnClass.contains("atv") ){
            removeAtv()
            removeShow()
        }else{
            btnClass.add("atv")
            crntEvent.nextElementSibling.classList.add("show")
        }
    })
    
})
  
})
function removeShow(){
    answer.forEach((ans)=> ans.classList.remove("show"))

}

function removeAtv(){
    btns.forEach((btn) => btn.classList.remove("atv"))
}
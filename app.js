let span = document.querySelectorAll(".span")
let contents = document.querySelectorAll(".contents")

span.forEach((e,index_span)=>{
    e.addEventListener("click",()=>{
      contents.forEach((e,index)=>{
      if(index === index_span){
      e.classList.toggle("active_Contents")
      }
      })
    })
})


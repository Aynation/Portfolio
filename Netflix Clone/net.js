const faqs = document.querySelectorAll(".faq")

faqs.forEach((faq)=>{
    faq.addEventListener("click",()=>{
        if(faq.classList.contains("active")){
            faq.classList.remove("active")
        } else {
            faq.classList.add("active")
        }
    })
})

console.log(alert('This page is yet to be mobile responsive, but works fine on a desktop view'))
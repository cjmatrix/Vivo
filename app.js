let hamburger=document.querySelector(".c-hamberger");


let menu=document.querySelector(".expanded-navbar");
console.log(menu);

function showMenu(show)
{
    if( menu.style.height==="100vh")
    {
        menu.style.height="0vh"; 
        return;
    }
    console.log(menu.style.height);
 menu.style.height="100vh";
    

}


document.addEventListener("DOMContentLoaded",()=>{
    // let scrollDownAni=document.querySelector(".scroll-down-ani");

    const tl=gsap.timeline({repeat:3})

    tl.fromTo(".scroll-down-ani",{
        y:-50,
        opacity:0,
    },
    {
        opacity:1,
        y:-25,
        duration:1.2
    })
    .to(".scroll-down-ani",{
    
        opacity:0,
        duration:1
   
    })

    let imgFade=document.querySelectorAll(".img-section.fade-up");
    let boxes=document.querySelectorAll(".box");
  
    imgFade.forEach(imgf=>{
        gsap.from(imgf ,{
            y:100,
            opacity:0,
            duration:1,
            
            scrollTrigger:{
                trigger:imgf,
                start:"top 80%",
              
            }
        })
    })
    gsap.from(".img-desc.fade-up",{
        y:300,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:imgFade[1],
            start:"top 80%",
      
        }
    })

        gsap.from(boxes ,{
            y:100,
            opacity:0,
            duration:0.5,
            stagger:0.2,
            scrollTrigger:{
                trigger:".grid",
                start:"top 80%",
           
            }
        })

        const menuBtn = document.getElementById("menu-btn");
let isOpen = false;

menuBtn.addEventListener("click", () => {
  if (!isOpen) {
    gsap.to(".line1", { rotate: 45,y:10, duration: 0.3 });
    gsap.to(".line3", { rotate: -45,y:0, duration: 0.3 });
    gsap.to(".line2", { opacity:0, duration: 0.3 });
  } 
  else 
  {
    gsap.to(".line1", { rotate: 0, y: 0, duration: 0.3 });
    gsap.to(".line3", { rotate: 0, y: 0, duration: 0.3 });
    gsap.to(".line2", { opacity:1, duration: 0.3 });
   
  }
  isOpen = !isOpen;
});

    
})
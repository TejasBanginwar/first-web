
var play= document.querySelector(".play")

document.addEventListener("mousemove",function(dets){
    gsap.to(".play",{
        x:dets.x-20,
        y:dets.y-20,
        ease:"power.out",
        duration:1
    })
})

document.querySelector(".overlay2").addEventListener("mouseenter",function(){
    gsap.to(".play",{
        scale:1,
        opacity:1,
       duration:0.2
        
})
})

document.querySelector(".overlay2").addEventListener("mouseleave",function(){
    gsap.to(".play",{
        scale:0,
        opacity:0,
        duration:0.2
})
})

var transcur= document.querySelector(".transcur");

document.addEventListener("mousemove",function(dets){
    gsap.to(".transcur",{
        x:dets.x,
        y:dets.y,
        ease:"power.out",
        duration:0.1
    })
})

document.querySelector(".grid").addEventListener("mouseenter",function(){
    gsap.to(".transcur",{
        scale:1,
        opacity:1,
       duration:0.1,
       transform:'translate(-50%,-50%)'
       
        
})
})

document.querySelector(".grid").addEventListener("mouseleave",function(){
    gsap.to(".transcur",{
        scale:0,
        opacity:0,
        duration:0,
        transform:'translate(-50%,-50%)'
       
})
})

gsap.from("h1",{
     y:100,
     opacity:0,
     delay:0.5,
     duration:0.9,
     stagger:0.3
})
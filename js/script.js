var way1 = document.querySelector(".way-1");
var way2 = document.querySelector(".way-2");

// mousemove 
way1.addEventListener("mousemove",function(){
    console.log("MOusehovering");
    gsap.to(way1,{
        y:"-5vw",
        // duration:1,
        ease:"power2.out"
    })


});

// mouseout

way1.addEventListener("mouseout",function(){
    console.log("MOuseout");
    gsap.from(way1,{
        y:"0vw",
        // duration:1,
        ease:"power2.out"
    })
});
way2.addEventListener("mousemove",function(){
    console.log("MOusehovering");
    gsap.to(way2,{
        y:"-5vw",
        // duration:1,
        ease:"power2.out"
    })


});

// mouseout

way2.addEventListener("mouseout",function(){
    console.log("MOuseout");
    gsap.from(way2,{
        y:"0vw",
        // duration:1,
        ease:"power2.out"
    })
});
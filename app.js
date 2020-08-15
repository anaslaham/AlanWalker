const alanimg=$(".mainimg");
const tl =new TimelineMax();
tl.fromTo($(".name"),1,{x:"-200%"},{x:"0%",ease:"power2.out"})
.fromTo(alanimg,1,{x:"-100%"},{x:"0%",ease:"power2.out"},"-=1")
.fromTo($(".navbar"),1,{y:"-100%",opacity:"0%"},{y:"0%",opacity:"100%",ease:"power2.out"},"-=1")
.fromTo($(".songs"),0.7,{x:"+100%",opacity:"0%"},{x:"0%",opacity:"100%",ease:"power2.out"},"-=1")
.fromTo($(".card"),1,{x:"+100%",opacity:"0%"},{x:"0%",opacity:"100%",ease:"power2.out"},"-=0.5");
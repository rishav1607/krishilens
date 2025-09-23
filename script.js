

var tl = gsap.timeline()

tl.from("#navbar h2",{
    y:-30,
    opacity:0,
    duration:0.5,
    dealy:0.1
})

tl.from("#navbar h3",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.1
})

tl.from("#navbar img",{
    y:+20,
    opacity:0,
    duration:0.5,
    scale:0.2
})

tl.from("#bigBuffalo img",{
    y:+20,
    opacity:0,
    duration:1,
    scale:0.2
})

tl.from("#description h1",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.2
})

tl.from("#description h2",{
    y:-30,
    opacity:0,
    duration:0.6,
    stagger:0.2
})



tl.from("button",{
    y:-30,
    opacity:0,
    duration:0.8,
    stagger:0.1
})







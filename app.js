var tl = new TimelineLite();



tl.from(".widget", 2, {alpha: 0, opacity: 1})
    .from(".book", 1.5, {alpha: 0, ease: Back.easeInOut, y: -150}, "-=1.7")
    .from(".off", .5, {alpha: 0, ease: Back.easeInOut, x:-150}, "-=.8")
    .from(".text", .5, {alpha: 0, ease: Back.easeInOut, x:120}, "-=.8")
    .from(".button", 2, {alpha: 0, opacity: 1}, "-=.2")
    .from(".buy", 1.5, {alpha: 0, opacity: 1}, "-=1")
    .to(".off", .4, {opacity: 0, yoyo:true, repeat:10, repeatDelay:.4}, "-=1.5")


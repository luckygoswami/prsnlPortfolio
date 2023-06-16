setTimeout(function () {
    // your animation code here
    var typed = new Typed('#name', {
        strings: ['Lucky Goswami'],
        typeSpeed: 50,
    });
}, 1000);

setTimeout(function () {
    // your animation code here
    gsap.to("#circle", {
        rotate: 0,
        ease: Expo.easeInOut,
        duration: 2
    })
    
    var active = 3;
    
    var mncircles = document.querySelectorAll("#mncircle")
    var sec = document.querySelectorAll(".sec")
    
    gsap.to(mncircles[active - 1], {
        opacity: .5
    })
    
    gsap.to(sec[active - 1], {
        opacity: 1
    })
    
    mncircles.forEach(function (val, index) {
        val.addEventListener("click", function () {
            gsap.to("#circle", {
                rotate: (3 - (index + 1)) * 10,
                ease: Expo.easeInOut,
                duration: 1
            })
            greyout();
            gsap.to(this, {
                opacity: .5
            })
    
            gsap.to(sec[index], {
                opacity: 1
            })
        })
    })
    
    function greyout() {
        gsap.to(mncircles, {
            opacity: .08
        })
        gsap.to(sec, {
            opacity: .4
        })
    }
}, 5000);


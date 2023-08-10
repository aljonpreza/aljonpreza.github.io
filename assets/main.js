$(window).on("load", function () {
    gsap.utils.toArray(".page-title").forEach(line => {
        gsap.from(line, {
            autoAlpha: 0,
            duration: 0.6,
            y: 20,
            ease: "power1.inOut",
            scrollTrigger: {
                start: "top 90%",
                trigger: line,
                //toggleActions: "play none none reverse",
            }
        });
    });

    gsap.utils.toArray(".section-title").forEach(line => {
        gsap.from(line, {
            autoAlpha: 0,
            duration: 0.6,
            y: 20,
            ease: "power1.inOut",
            scrollTrigger: {
                start: "top 90%",
                trigger: line,
                //toggleActions: "play none none reverse",
            }
        });
    });

    gsap.utils.toArray("hr.divider").forEach(line => {
        gsap.from(line, {
            scaleX: 0,
            duration: 1,
            transformOrigin: "left center",
            ease: "power2.inOut",
            scrollTrigger: {
            trigger: line,
            start: "top 90%",
            toggleActions: "play none none reverse"
            }
        });
    });

    gsap.from(".site-header hr", {
        scaleX: 0,
        duration: 1,
        transformOrigin: "left center",
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: ".site-header hr",
            start: "top",
            end: 99999,
            toggleActions: "play none none reverse",
            toggleClass: {className: 'scrolled', targets: '.site-header hr'}
        }
    });
});
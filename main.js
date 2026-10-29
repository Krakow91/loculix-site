document.addEventListener("DOMContentLoaded", (event) => {
    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Registriere ScrollTrigger (nur wenn GSAP geladen ist)
    if (typeof gsap === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    // Initial Hero Animation
    const tl = gsap.timeline();
    
    tl.fromTo(".gsap-reveal", 
        { y: 30, opacity: 0, autoAlpha: 0 }, 
        { y: 0, opacity: 1, autoAlpha: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
    )
    .fromTo(".hero-image-wrapper",
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power4.out" },
        "-=0.5"
    );

    // Hero Scroll Parallax Effect
    gsap.to(".hero-image", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top top", 
            end: "bottom top",
            scrub: true
        }
    });

    // Fade Up Elements
    gsap.utils.toArray('.gsap-fade-up').forEach(element => {
        gsap.fromTo(element, 
            { y: 40, opacity: 0, autoAlpha: 0 },
            { 
                y: 0, 
                opacity: 1, 
                autoAlpha: 1,
                duration: 0.8, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%", // Triggers when the top of element is 85% down viewport
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Slide Left
    gsap.utils.toArray('.gsap-slide-left').forEach(element => {
        gsap.fromTo(element, 
            { x: -50, opacity: 0, autoAlpha: 0 },
            { 
                x: 0, 
                opacity: 1, 
                autoAlpha: 1,
                duration: 1, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Slide Right
    gsap.utils.toArray('.gsap-slide-right').forEach(element => {
        gsap.fromTo(element, 
            { x: 50, opacity: 0, autoAlpha: 0 },
            { 
                x: 0, 
                opacity: 1, 
                autoAlpha: 1,
                duration: 1, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Scale Up (Security Icons)
    gsap.utils.toArray('.gsap-scale-up').forEach((element, i) => {
        gsap.fromTo(element, 
            { scale: 0.8, opacity: 0, autoAlpha: 0 },
            { 
                scale: 1, 
                opacity: 1, 
                autoAlpha: 1,
                duration: 0.6, 
                ease: "back.out(1.7)",
                delay: element.classList.contains('delay-1') ? 0.2 : 
                       element.classList.contains('delay-2') ? 0.4 : 
                       element.classList.contains('delay-3') ? 0.6 : 0,
                scrollTrigger: {
                    trigger: ".security-grid", // animate together when grid is in view
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
});

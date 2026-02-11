window.addEventListener('DOMContentLoaded', function() {
	gsap.registerPlugin(ScrollTrigger);

	let speed = 100;

	/*  SCENE 1 */
	let scene1 = gsap.timeline();
	ScrollTrigger.create({
		animation: scene1,
		trigger: ".scrollElement",
		start: "top top",
		end: "30% 100%",
		scrub: 3,
		//markers: true,
	});

	// space animation
    gsap.set('#stars', {y:-30});

	scene1.to("#big-planet", { y: .5*speed, 
						 x: -5*speed,
						 scale: 0.4,
						 ease: "power1.in", }, 0)
          .to("#planet", { x: 5*speed,
                           y: .5*speed,
                           scale: 1.8,
                           ease: "power1.out"}, 0.03)
          .to("#c stop:nth-child(1)", { attr: { "stop-color": "#5B72A6" } }, 0.03)
          .to("#c stop:nth-child(2)", { attr: { "stop-color": "#5B72A6" } }, 0.03)
          .to("#c stop:nth-child(3)", { attr: { "stop-color": "#5B72A6" } }, 0.03)
          .to("#ligth-container", {y:50, opacity:0}, 0.1)
          .to("#stars", { y: 100 }, 0.15)


    gsap.to(gsap.utils.toArray(".ligth"), {scale:0.1, yoyo: true, repeat: -1, duration: 0.2, stagger: 0.1, ease: "power1.in", transformOrigin: "50% 50%"});



    /* Transition (from Scene1 to Scene2) */
    gsap.set("#scene2", { yPercent: 100, visibility: "visible" });

    let scene2Transition = gsap.timeline();
    ScrollTrigger.create({
        animation: scene2Transition,
        trigger: '.scrollElement',
        start: "10% top",
        end: "50% bottom",
        //markers: true,
        scrub: 3,
    });

    scene2Transition.to("#scene1", { yPercent: -110 }, 0)
                    .to("#scene2", {yPercent: 0}, 0)
                    


    /*  SCENE 2 */
    let scene2 = gsap.timeline();
    ScrollTrigger.create({
        animation: scene2,
        trigger: ".scrollElement",
        start: "20% 50%",
        end: "50% bottom",
        scrub: 3,
        //markers: true,
    });

    // waves animation
    scene2.fromTo("#wave1", {y:300, opacity:0}, {y:0, opacity: 1}, 0)
          .fromTo("#wave2", {y:400, x:-200}, {y:0, x:0}, 0.08)
          .fromTo("#wave3", {y:300}, {y:0}, 0.16)
          .fromTo("#wave4", {y:400}, {y:0}, 0.24)


    /* Clouds  */
    let clouds = gsap.timeline();
    ScrollTrigger.create({
        animation: clouds,
        trigger: ".scrollElement",
        start: "10% top",
        end: "80% 100%",
        scrub: 1,
    });

    clouds.fromTo("#cloud1", {x:-50, y:40}, {x:450}, 0)
          .to("#cloud2", {x:900}, 0)
          .to("#cloud3", {x:-800}, 0)
          .to("#cloud4", {x:-500}, 0)
          .to("#cloud5", {x:100}, 0)


    //sun animation
    let sun = gsap.timeline();
    ScrollTrigger.create({
        animation: sun,
        trigger: '.scrollElement',
        start: "35% top",
        end: "70% bottom",
        scrub: 3,
        //markers: true,
    });

    sun.fromTo("#sun", {y:400, scale:0.6}, {y:-190, scale: 1}, 0)
       .to("#t stop:nth-child(1)", { attr: { "stop-color": "#977AA6" } }, 0.03)
       .to("#t stop:nth-child(2)", { attr: { "stop-color": "#D19EAF" } }, 0.03)
       .to("#t stop:nth-child(3)", { attr: { "stop-color": "#F4F3B4" } }, 0.03)



     /* Transition (from Scene2 to Scene3) */
    gsap.set("#scene3", { yPercent: 100, visibility: "visible" });

    let scene3Transition = gsap.timeline();
    ScrollTrigger.create({
        animation: scene3Transition,
        trigger: '.scrollElement',
        start: "65% top",
        end: "100% bottom",
        //markers: true,
        scrub: 3,
    });

    scene3Transition.to("#wave-wrapper", { yPercent: -110, scale: 1.4, transformOrigin: "50% 50%" }, 0)
                    .to("#scene3", {yPercent: 0}, 0)



    /*  SCENE 3 */
    let scene3 = gsap.timeline();
    ScrollTrigger.create({
        animation: scene3,
        trigger: ".scrollElement",
        start: "80% 50%",
        end: "100% bottom",
        scrub: 3,
        //markers: true,
    });

    scene3.fromTo("#undersea", {y:300}, {y:0})
          .fromTo("#plant1, #plant2, #plant3, #chest", {opacity:0, y:500}, {opacity:1, y:0, stagger:0.1}, '<')
          .fromTo('#hero-move', {y:300, x:-2000}, {y:0, x:0})
    
    const moves = document.querySelectorAll('.move');   
	moves.forEach((item, i) => {
        gsap.to(item, {
            rotation: i % 2 === 0 ? 1.4 : -1.4,
            duration: 2.4 + i * 0.3,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            transformBox: "fill-box",
            transformOrigin: "50% 50%",
        });
    });

    gsap.to(gsap.utils.toArray(".coin-star"), {scale:0.1, yoyo: true, repeat: -1, duration: 0.15, stagger: 0.1, ease: "power1.in", transformOrigin: "50% 50%"});

});
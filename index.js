
//hamburger menu interaction and animaition
const menuToggle = document.querySelector('.hamburgerIcon');
const slideIn = document.querySelector('.hamburgerMenuMain');
const closeToggle = document.querySelector('.closeButton');
const activeNav = document.querySelector('.stickyNavBar');

const clickLinkOne = document.querySelector('#closeLinkOne');
const clickLinkTwo = document.querySelector('#closeLinkTwo');
const clickLinkThree = document.querySelector('#closeLinkThree');
const clickLinkFour = document.querySelector('#closeLinkFour');



menuToggle.addEventListener('click', () => {
    slideIn.classList.add('active');
    console.log(slideIn);
    console.log(menuToggle);
    console.log(clickLink);
});

closeToggle.addEventListener('click', () => {
    slideIn.classList.remove('active');
});

clickLinkOne.addEventListener('click', () => {
    slideIn.classList.remove('active');
});

clickLinkTwo.addEventListener('click', () => {
    slideIn.classList.remove('active');
});

clickLinkThree.addEventListener('click', () => {
    slideIn.classList.remove('active');
});

clickLinkFour.addEventListener('click', () => {
    slideIn.classList.remove('active');
});



//show navbar on scroll after a hero image
const posM = document.querySelector('#missionSection');
const yPos = window.innerHeight;
var path = window.location.pathname;
var page = path.split("/").pop();

window.addEventListener('scroll', () => {
    if (window.scrollY >= yPos && page === 'index.html') {
        activeNav.className = "stickyNavBarActive ";
    }

    else {
        activeNav.className = "stickyNavBar";
    }
})



gsap.from(".headerStagger",{y:400, duration:1, ease: "power4.out", stagger:0.2});
const tlCover = gsap.timeline();

tlCover.from(".coverAnimation",{y:100, duration: 1, ease: "power4.out", opacity: 0, delay:0.8});


//Mission animations
const tlMission = gsap.timeline({
    scrollTrigger: {
      trigger: "#missionSection",
      start: "top bottom",
      end:"top top",
      scrub: 1
    }
  });
  
  gsap.utils.toArray(".missionParallax").forEach(layer => {
    const speed = layer.dataset.speed;
    const movement = (layer.offsetHeight * speed);
    tlMission.from(layer, {y: movement, ease: "power4.out"}, 0);
  });
 



 //Experience animations
 const tlwork = gsap.timeline({
    scrollTrigger: {
      trigger: "#workSection",
      start: "top bottom",
      end:"center center",
      scrub: 1
    }
  });
  tlwork.from(".tilesSection",{y:400, scale:0.7, ease: "power4.out" },"-=0.5");



 //Skills animations
 const tlSkill = gsap.timeline({
    scrollTrigger: {
      trigger: ".skillSectionWrap",
      start: "top bottom",
      end:"center top",
      scrub: 1,
    }
  });

tlSkill.from("#designSkills", {y:-200,opacity:0, ease: "power4.out"});
 tlSkill.from("#discoverSkills", {y:100, x:-200,opacity:0, ease: "power4.out"},"-=0.5");
 tlSkill.from("#deploySkills", {y:100, x:+200, opacity:0, ease: "power4.out"},"-=0.5");

 

 //Exp animations
 const tlExp = gsap.timeline({
    scrollTrigger: {
      trigger: ".experienceMainContainer",
      start: "top bottom",
      end:"bottom center",
      scrub: 1,
    }
  });

  tlExp.from(".one",{y:50,scale:0.8, opacity:0, ease: "power4.out"});
  tlExp.from(".two",{y:50, opacity:0, scale:0.8, ease: "power4.out" });
  tlExp.from(".three",{y:50, opacity:0,scale:0.8, ease: "power4.out" });

  

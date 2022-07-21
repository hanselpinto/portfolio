
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
var pageName = document.title;
// var path = window.location.pathname;
// var page = path.split("/").pop();

window.addEventListener('scroll', () => {
    if (window.scrollY >= yPos && document.title === "Hansel's portfolio") {
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
    }
  });
  
    tlMission.from(".missionTitleAnimation, .missionTitleBody",{y:400,duration:1, opacity:0 });
   

    const tlMissionScrub = gsap.timeline({
      scrollTrigger: {
        trigger: "#missionSection",
        start: "top bottom",
        end:"bottom top",
        scrub:1,
      }
    });

tlMissionScrub.from(".imageMe",{y:250,duration:2});
tlMissionScrub.to(".imageMe",{y:-20,duration:2});
tlMissionScrub.from(".plusSvg",{y:50,x:20, rotation:10,duration:2});
tlMissionScrub.to(".plusSvg",{y:-50,x:-20, rotation:-10,duration:2});
tlMissionScrub.from(".coneSvg",{y:150,x:-20,rotation:20,duration:2});
tlMissionScrub.to(".coneSvg",{y:-40,x:+10,rotation:-20,duration:2});



 //work tiles
 const tlwork = gsap.timeline({
    scrollTrigger: {
      trigger: "#workSection",
      start: "top bottom",
    }
  });
  tlwork.from(".divider, .workSectionTitle, .tilesSectionWrapper",{y:200, opacity:0, duration:0.75, ease: "sine.out"});

//work animations
const tlworkAnim = gsap.timeline({
  scrollTrigger: {
    trigger: "#workSection",
    start: "top bottom",
    scrub:1,
  }
});
tlworkAnim.fromTo(".circleWorkSvg",{y:500,x:-300,duration:1},{y:-100,x:100,duration:1});
tlworkAnim.to(".rotateSvg",{y:-400, rotate:60,duration:1},"-=0.25");




 //Skills animations
 const tlSkill = gsap.timeline({
    scrollTrigger: {
      trigger: "#skillSection",
      start: "top bottom",
      
    }
  });

  tlSkill.from(".skillSectionWrap",{y:200, opacity:0, duration:0.5, ease: "sine.out"});
tlSkill.from("discoverSkills", {y:200,opacity:0, duration:0.5});
 tlSkill.from("#designSkills", {y:200,ease: "slow(0.7, 0.7, false)",delay:0.25, duration:0.75, opacity:0},"-=0.5");
 tlSkill.from("#deploySkills", {y:200, ease: "slow(0.7, 0.7, false)",opacity:0,delay:0.25, duration:0.75},"-=0.5");
 
 const tlSkillAnim = gsap.timeline({
  scrollTrigger: {
    trigger: "#skillSection",
    start: "top bottom",
    scrub:1
  }
});
tlSkillAnim.fromTo(".plusSkill",{y:100, x:30,ease: "sine.out",rotate:20},{y:-100, x:-30,ease: "sine.out", rotate:-10});
tlSkillAnim.fromTo(".coneSkillAnimation",{y:100,ease: "sine.out", rotate:30},{y:-100, ease: "sine.out", rotate:-30},"-=0.5");




 //Exp animations
 const tlExp = gsap.timeline({
    scrollTrigger: {
      trigger: ".experienceMainContainer",
      start: "top bottom",
    }
  });
  tlExp.from(".expSectionTitle",{y:200, opacity:0, duration:0.5, ease: "sine.out"});
  tlExp.from(".one",{y:200,scale:0.8, opacity:0, ease: "slow(0.7, 0.7, false)"});
  tlExp.from(".two",{y:50, opacity:0, scale:0.8,delay:0.25, ease: "slow(0.7, 0.7, false)" });
  tlExp.from(".three",{y:50, opacity:0,scale:0.8,delay:0.25,  ease: "slow(0.7, 0.7, false)" });

  
  const tlExpAnim = gsap.timeline({
    scrollTrigger: {
      trigger: ".experienceMainContainer",
      start: "top bottom",
      scrub:1
    }
  });
  tlExpAnim.fromTo(".arrowShadow",{y:400, x:30,ease: "sine.out",rotate:20},{y:-100, x:-30,ease: "sine.out", rotate:-10});
  tlExpAnim.fromTo(".circleExp",{y:40, x:30,ease: "sine.out",rotate:20},{y:-40, x:-30,ease: "sine.out", rotate:-10});


//GetinTouch animations
  const getInT = gsap.timeline({
    scrollTrigger: {
      trigger: ".sectionTitleContact",
      start: "top bottom",
    }
  });
  getInT.from(".sectionTitleContact, .contactContainer",{y:200, opacity:0, duration:0.5, ease: "sine.out"});

  const getInTAnim = gsap.timeline({
    scrollTrigger: {
      trigger: ".sectionTitleContact",
      start: "top bottom",
      scrub:1,
    }
  });
  getInTAnim.from(".contactPlus",{y:200, opacity:0, duration:0.5, });
  getInTAnim.to(".contactPlus",{y:-100, duration:0.5, });
let homeBtn = document.querySelector(".nav-link.active.mx-3.home")
let aboutMeBtn = document.querySelector(".nav-link.mx-3.aboutMe")
let projectsBtn = document.querySelector(".nav-link.mx-3.projects")
let contactMeBtn = document.querySelector(".nav-link.mx-3.contactMe")
let homeSection = document.getElementById("#homeArea")
let aboutMeSection = document.getElementById("#aboutMeArea")
let projectsSection = document.getElementById("#projectsArea")
let contactMeSection = document.getElementById("#contactMeArea")




//All 4 of the navbar buttons are indeed working


homeBtn.onclick = function(){
    console.log("home hooray")
    homeSection.scrollIntoView()
}

aboutMeBtn.onclick = function(){
    console.log("about me hooray")
    aboutMeSection.scrollIntoView()
}

projectsBtn.onclick = function(){
    console.log("projects hooray")
    projectsSection.scrollIntoView()
}

contactMeBtn.onclick = function(){
    console.log("contact me hooray")
    document.getElementById("#contactMeArea").scrollIntoView({behavior: "smooth"});
}



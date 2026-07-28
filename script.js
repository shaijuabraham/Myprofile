


// Dark mode

const btn = document.getElementById("themeToggle");


if(btn){

    btn.onclick = function(){

        document.body.classList.toggle("dark");

    };

}


// Left nav section switching

const navLinks = document.querySelectorAll(".nav-link[data-section]");
const contentSections = document.querySelectorAll(".content-section");
const homeSectionIds = ["hero", "about"];

const showSection = function(sectionId){

    if(!sectionId){
        return;
    }

    contentSections.forEach(section => {

        const isHomeView = sectionId === "hero" && homeSectionIds.includes(section.id);
        const isActive = isHomeView || section.id === sectionId;
        section.classList.toggle("active", isActive);

    });

    navLinks.forEach(link => {

        const isActive = link.dataset.section === sectionId;
        link.classList.toggle("active", isActive);

    });

};


if(navLinks.length && contentSections.length){

    navLinks.forEach(link => {

        link.addEventListener("click", function(){

            const sectionId = this.dataset.section;
            showSection(sectionId);
            window.location.hash = sectionId;

        });

    });

    showSection("hero");
    window.location.hash = "hero";

}




// Project Read More / Show Less

document.querySelectorAll(".read-more")
.forEach(button => {

    button.addEventListener("click", function(){

        const project = this.closest(".project");

        project.classList.toggle("expanded");


        if(project.classList.contains("expanded")){

            this.innerHTML = "Show Less";

        }
        else{

            this.innerHTML = "Read More";

        }


    });

});





// Skill animation

window.addEventListener("load", function(){

    document.querySelectorAll(".bar span")
    .forEach(bar => {

        bar.style.width = bar.dataset.width;

    });


});




// Dynamic Year

const year = document.getElementById("year");

if(year){

    year.innerHTML = new Date().getFullYear();

}


// Back to top button

const backToTopBtn = document.getElementById("backToTop");

if(backToTopBtn){

    const toggleBackToTop = function(){

        if(window.scrollY > 350){

            backToTopBtn.classList.add("show");

        }
        else{

            backToTopBtn.classList.remove("show");

        }

    };

    window.addEventListener("scroll", toggleBackToTop);
    toggleBackToTop();

    backToTopBtn.addEventListener("click", function(){

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}
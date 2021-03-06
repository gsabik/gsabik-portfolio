const sr = ScrollReveal({
    duration:2000,
})

/*Titles*/ 
sr.reveal(".aboutme-title, .skills-title, .projects-title, .contact-title",{});

/*Hero*/
sr.reveal(".hero-title",{
    origin:"left",
    distance:"80px"
});

sr.reveal(".hero-subtitle",{
    origin:"left",
    distance:"80px"
});

sr.reveal(".hero-link",{
    delay:900
});

/*About me*/
sr.reveal(".aboutme-left",{
    origin:"left",
    distance:"50px",
    delay:200
});

sr.reveal(".aboutme-right",{
    delay:700
});

/*Skills*/
sr.reveal(".skills-description",{
    delay:500
});

sr.reveal(".skills-list",{
    delay:800
});

/*Projects*/
sr.reveal(".project-description",{
    origin: "left",
    distance:"50px"
});

sr.reveal(".project-img",{
    delay:500
});

/*Contact */
sr.reveal("form",{
    delay:500,
});

sr.reveal(".contact-items",{
    delay:750
});
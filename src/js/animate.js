const sections = document.querySelectorAll('.animateRigth');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel');
        }
    });
}, options);
sections.forEach(section => {
    observer.observe(section);
});

const sectionsL = document.querySelectorAll('.animateLeft');
const optionsL = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observerL = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, optionsL);
sectionsL.forEach(sectionL => {
    observerL.observe(sectionL);
});

const sectionsUP = document.querySelectorAll('.animateToUP');
const optionsUP = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observerUP = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showUP');
        }
    });
}, optionsUP);
sectionsUP.forEach(sectionUP => {
    observerUP.observe(sectionUP);
});

const sectionsUPDelay1 = document.querySelectorAll('.animateToUPDelay1');
const optionsUPDelay1 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observerUPDelay1 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showUPDelay1');
        }
    });
}, optionsUPDelay1);
sectionsUPDelay1.forEach(sectionUPDelay1 => {
    observerUPDelay1.observe(sectionUPDelay1);
});

const sectionsUPDelay2 = document.querySelectorAll('.animateToUPDelay2');
const optionsUPDelay2 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observerUPDelay2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showUPDelay2');
        }
    });
}, optionsUPDelay2);
sectionsUPDelay2.forEach(sectionUPDelay2 => {
    observerUPDelay2.observe(sectionUPDelay2);
});

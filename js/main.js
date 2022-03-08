$(() => {
    $('.sidenav').sidenav();
    $('.pin-top').pushpin({
        top: 32
    });
    $('.dropdown-trigger').dropdown();
    $('.carousel').carousel({
        dist: -50
    });
    $('.materialboxed').materialbox();

    // lazy loads elements with default selector as '.lozad'
    const observer = lozad();
    observer.observe();
});

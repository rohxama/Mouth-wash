const allContainerItems = gsap.utils.toArray('.item a'); 
const venueImageWrap = document.querySelector('.container-img-wrap');
const venueImage = document.querySelector('.container-img');

function initContainer() {
    allContainerItems.forEach((link) => {
        link.addEventListener('mouseenter', venueHover);
        link.addEventListener('mouseleave', venueHover);
        link.addEventListener('mousemove', moveVenueImage);
    });
}

function moveVenueImage(e) {
    let xpos = e.clientX;
    let ypos = e.clientY;
    gsap.to(venueImageWrap, {
        x: xpos,
        y: ypos,
    });
}

function venueHover(e) {
    if (e.type === "mouseenter") {
        const targetImage = e.target.dataset.img;

        if (targetImage) { 
            gsap.timeline()
                .set(venueImage, { backgroundImage: `url(${targetImage})` })
                .to(venueImageWrap, { duration: 0.5, autoAlpha: 1 });
        } else {
            console.warn("Image path is undefined.");
        }
    } else if (e.type === "mouseleave") {
        gsap.to(venueImageWrap, { duration: 0.5, autoAlpha: 0 });
    }
}

function init() {
    initContainer();
}

window.addEventListener('load', init);

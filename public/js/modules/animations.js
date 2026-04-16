export const initAnimations = () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,   
            easing: 'ease-in-out' 
        });
        console.log("/// AOS Animations Initialized");
    } else {
        console.warn("/// AOS Library not found! Check your CDN link.");
    }
};
let count = document.querySelector(".count");

setInterval(() => {
    if (count.innerHTML > 0) {
        count.innerHTML = count.innerHTML - 1;
    }
}, 1000);

gsap.fromTo(
    ".count",
    { scale: 0.3 },
    { scale: 1, duration: 1 }
);

gsap.fromTo(
    ".count",
    { scale: 1 },
    { scale: 2.5, opacity: 0, duration: 1, delay: 3 }
);
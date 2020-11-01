const navSlide = () => {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const shadowBackground = document.querySelector('.shadow-background');

    //Toggle Navbar
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 8}s`
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');

        //Add shadow background
        shadowBackground.classList.toggle('shadow');
    })
}

const tableWrapping = () => {
    $('.important-dates-table td').unwrap();
    $('.important-dates-table td').wrapAll('<tr></tr>');
}

const app = () => {
    navSlide();
}

app()
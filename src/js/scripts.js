//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {

        const torch = document.body.querySelector("#torch");
        if (torch) {
            const maxTop = (torch.offsetTop + torch.clientHeight - document.scrollingElement.scrollTop) / (torch.offsetTop + torch.clientHeight);
            if (maxTop > 0) {
                // console.log("scroll:", maxTop, this.state);
                const num = Math.ceil((1 - maxTop) * 10);
                const newImg = `assets/img/header/${num > 9 ? 9 : num}.png`;
                torch.src = newImg;
            }
        }

        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (navbarCollapsible) {
            if (window.scrollY === 0) {
                navbarCollapsible.classList.remove('navbar-shrink')
            } else {
                navbarCollapsible.classList.add('navbar-shrink')
            }
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

 document.querySelector('.navbar-toggler').addEventListener('click', function() {
    document.body.classList.toggle('menu-open');
});

// Close menu and restore scroll when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('menu-open');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('exCollapsingNavbar');
    
    // When the menu starts showing
    menu.addEventListener('show.bs.collapse', function () {
        document.body.classList.add('menu-open');
    });

    // When the menu starts hiding
    menu.addEventListener('hide.bs.collapse', function () {
        document.body.classList.remove('menu-open');
    });
});

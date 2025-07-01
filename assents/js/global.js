
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.main-nav .nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('open');
          
        });
        

        document.addEventListener('DOMContentLoaded', () => {
            const header = document.querySelector('.main-header');
            const scrollThreshold = 50; 

            window.addEventListener('scroll', () => {
                if (window.scrollY > scrollThreshold) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        });

       
        navList.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) { 
                    navList.classList.remove('open');
                    menuToggle.classList.remove('active');
                }
            });
        });
    }
});
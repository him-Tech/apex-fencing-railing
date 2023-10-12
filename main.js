     const toggleSidebarButton = document.getElementById('toggleSidebar');
     const sidebar = document.getElementById('sidebar');
     toggleSidebarButton.addEventListener('click', () => {
         sidebar.classList.toggle('translate-x-full');
     });
     var swiper = new Swiper(".mySwiper", {
         slidesPerView: 1,
         centeredSlides: false,
         slidesPerGroupSkip: 1,
         grabCursor: true,
         keyboard: {
             enabled: true,
         },
         breakpoints: {
             769: {
                 slidesPerView: 2,
                 slidesPerGroup: 2,
             },
         },

         navigation: {
             nextEl: ".swiper-button-next",
             prevEl: ".swiper-button-prev",
         },

     });
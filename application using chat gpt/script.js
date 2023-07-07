const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.getElementById('navbarMenu');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('show');
});



      const slider = document.querySelector('.testimonials-slider');
      let isDown = false;
      let startX;
      let scrollLeft;
      
      slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      
      slider.addEventListener('mouseleave', () => {
        isDown = false;
      });
      
      slider.addEventListener('mouseup', () => {
        isDown = false;
      });
      
      slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3;
        slider.scrollLeft = scrollLeft - walk;
    });
      
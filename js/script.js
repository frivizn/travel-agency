const menuToggle = document.querySelector('.toggle');
const videoContainer = document.querySelector('.video-container');
const navLinks = document.querySelectorAll('.nav__link')

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  videoContainer.classList.toggle('active');
})

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    videoContainer.classList.remove('active');
  })
})

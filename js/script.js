const toggleButton = document.getElementsByClassName('burger-button')[0]
const navbarLinks = document.getElementsByClassName('navLink')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
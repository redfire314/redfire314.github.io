let loadedImgIndex = []

function showOnLoad() {
    document.querySelectorAll('img[data-src]').forEach((img, index) => {
        if (img.getBoundingClientRect().top < window.innerHeight && !loadedImgIndex.includes(index)) {
            loadedImgIndex.push(index)
            img.src = img.getAttribute('data-src')
        }
    })
}

document.querySelector('#hamburger-menu-container').addEventListener('click', () => {
    document.querySelector('#hamburger-menu').classList.toggle('open')
    document.querySelector('.nav-menu').classList.toggle('open')
})

window.addEventListener('scroll', showOnLoad)
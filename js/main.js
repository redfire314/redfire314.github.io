const load = setInterval(() => {
    if(document.readyState == "complete") {
        // Hamburger menu event
        document.querySelector('#hamburger-menu-container').addEventListener('click', () => {
            document.querySelector('#hamburger-menu').classList.toggle('open')
            document.querySelector('.nav-menu').classList.toggle('open')
        })

        clearInterval(load)
    }
}, 100)
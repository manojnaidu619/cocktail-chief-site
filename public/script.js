
window.addEventListener('load', () => {
    const button = document.querySelector('.download-link')
    button.addEventListener('click', () => {
        location.href = location.href + "download"
    })
})
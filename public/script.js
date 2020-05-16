window.addEventListener('load', () => {
    const button = document.querySelector('.download-div')
    button.addEventListener('click', () => {
        location.href = location.href + "download"
    })
})
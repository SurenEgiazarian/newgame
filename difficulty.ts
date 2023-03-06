import '/index.css'
document.querySelector('.b1')!.addEventListener('click', () => {
    localStorage.setItem('difficulty', '1')
})

document.querySelector('.b2')!.addEventListener('click', () => {
    localStorage.setItem('difficulty', '2')
})

document.querySelector('.b3')!.addEventListener('click', () => {
    localStorage.setItem('difficulty', '3')
})

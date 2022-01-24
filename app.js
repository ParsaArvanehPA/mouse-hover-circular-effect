const body = document.getElementsByTagName('section');

for (let i = 0; i < 2000; i++) {
    const newElement = document.createElement('i');
    body[0].appendChild(newElement);
    newElement.addEventListener('mousemove', (e) => {
        newElement.className = 'animation-activate'
    })

    newElement.addEventListener('mouseleave', () => {
        newElement.className = 'animation-deactivate'
    })
}
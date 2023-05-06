let img = document.querySelectorAll('.box');
img.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        } else {
            removerActive()
            item.classList.add('active');
        }
    });
});

function removerActive() {
    img.forEach(item => {
        item.classList.remove('active');
        
    });
}

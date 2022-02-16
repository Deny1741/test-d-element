let form = document.getElementById('form');
let items = document.getElementsByClassName('form-group');

form.addEventListener('submit', (event) => {
    for (let item of items) {
        let input = item.children[1];

        if (input.value === '') {
            input.style.background = '#ffc0cb';
            event.preventDefault();
        } else {
            input.style.background = '#E8F0FE';
        }
    }
});

form.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
    }
})

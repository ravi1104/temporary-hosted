setTimeout(() => {
    const name = prompt('Hi Welcome to my site, please enter your name');
    if (name) {
        document.getElementById('name').innerHTML = "Hi! " + name;
    }
}, 3000)
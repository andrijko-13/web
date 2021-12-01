window.onload = function() {
    var button = document.getElementById('header-logo');
    var body = document.getElementsByClassName('bg')[0];
    var colors = ['coral', 'darkcyan'];
    button.onclick = function() {
        body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    };
};

window.alert("Вітаємо на сайті");

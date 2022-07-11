function login_function () {
    var id = document.getElementById('id').value;
    var passwd = document.getElementById('passwd').value;

}

function enterkey() {
    if (window.event.keyCode == 13) {
        login_function();
    }
}
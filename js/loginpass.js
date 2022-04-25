window.onload = () => {

    const eye = document.getElementById("show-pass");
    const eyeOff = document.getElementById("hide-pass")
    const passwordField = document.querySelector("input[type=password]");
    
    eye.addEventListener('click', () => {
        passwordField.type = "text";
        eye.style.display = 'none';
        eyeOff.style.display = 'block';
    })

    eyeOff.addEventListener('click', () => {
        passwordField.type = "password";
        eye.style.display = 'block';
        eyeOff.style.display = 'none';
    })
}
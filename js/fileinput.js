window.onload = () => {
    const fileInput = document.querySelector('#file-input');
    const filebox = document.querySelector('#file-box');

    filebox.addEventListener('click', () => {
        fileInput.click();
    })
   
    fileInput.addEventListener("change", (e) => {
       filebox.innerHTML =  e.target.files[0].name;
        })
}

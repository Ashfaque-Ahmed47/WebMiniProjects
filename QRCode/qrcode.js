

const qrText = document.getElementById("qr-txt");
const size = document.getElementById("sizes");

const gnratbtn = document.getElementById("gnrate-btn");
const dwnldbtn = document.getElementById("dwnld-btn");
const qrContainer = document.querySelector(".qr-body");

let sizeimg=size.value; 


size.addEventListener("change", (e)=>{

    sizeimg=e.target.value; 
    generateQRCode(); 


});

gnratbtn.addEventListener("click", (e) => {
    e.preventDefault();
    generateQRCode();
});

function generateQRCode() {
    qrContainer.innerHTML = ""; 
    new QRCode(qrContainer, {
        text: qrText.value,
        height: parseInt(size.value),
        width: parseInt(size.value),
        colorLight: "#FFFFFF",
        colorDark: "#000000",
    });
}
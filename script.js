
const qrText = document.getElementById('qr-text');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isEmptyInput();
});

downloadBtn.addEventListener('click', () => {
    let img = document.querySelector('.qr-body img');
    if (img !== null) {
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr);
    } else {
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});

function isEmptyInput() {
    if (qrText.value.length > 0) {
        generateQRCode();
    } else {
        alert("Enter the text or URL to generate your QR code");
    }
}

function generateQRCode() {
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: qrText.value,
        height: 200, 
        width: 200,  
        colorLight: "#fff",
        colorDark: "#000",
    });
}

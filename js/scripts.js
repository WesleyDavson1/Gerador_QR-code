const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#formPrinc button");
const qrCodeInput = document.querySelector("#formPrinc input");
const qrCodeImg = document.querySelector("#qr-code img");


// função
function geratorQrCode(){
    const qrCodeInputValue = qrCodeInput.value;

    console.log(qrCodeInput.value);

    if(!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Gerando Qr-Code..."

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

   qrCodeImg.addEventListener("load", ()=>{
    container.classList.add("ativo");
    qrCodeBtn.innerText ="Qr-code gerado!"

   })

}


// eventos

qrCodeBtn.addEventListener("click", ()=>{
    geratorQrCode();
})

qrCodeInput.addEventListener("keydown", (e)=>{
    if(e.code === "Enter"){
        geratorQrCode();
    }
})
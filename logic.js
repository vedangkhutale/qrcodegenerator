function generateQR() {
  let imgboxvar = document.getElementById("imgbox");
  let qrimgvar = document.getElementById("qrimg");
  let qrtextvar = document.getElementById("qrtext");

  if (qrtextvar.value.length > 0) {
    qrimgvar.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrtextvar.value;

    imgboxvar.classList.add("showimg");
  } else {
    qrtextvar.classList.add("error");
    setTimeout(() => {
      qrtextvar.classList.remove("error");
    }, 1000);
  }
}

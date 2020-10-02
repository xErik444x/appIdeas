document.getElementById("sliderTop").addEventListener("change", function() {
    console.log(this.value);
    document.getElementById("cube").style.borderTop = `${this.value}px solid black`;
    generarCodigo();
}, false);
document.getElementById("sliderBottom").addEventListener("change", function() {
    console.log(this.value);
    document.getElementById("cube").style.borderBottom = `${this.value}px solid black`;
    generarCodigo();
}, false);
document.getElementById("sliderLeft").addEventListener("change", function() {
    console.log(this.value);
    document.getElementById("cube").style.borderLeft = `${this.value}px solid black`;
    generarCodigo();
}, false);
document.getElementById("sliderRight").addEventListener("change", function() {
    console.log(this.value);
    document.getElementById("cube").style.borderRight = `${this.value}px solid black`;
    generarCodigo()
}, false);


function generarCodigo() {
    var textArea = document.getElementById("resultCode");
    textArea.value = `#cube{
    border-top:${document.getElementById("cube").style.borderTop};
    border-bottom:${document.getElementById("cube").style.borderBottom};
    border-left:${document.getElementById("cube").style.borderLeft};
    border-right:${document.getElementById("cube").style.borderRight};
}
    `;
}
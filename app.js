function encryptText() {
    var inputText = document.getElementById('inputText').value;
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    inputText = inputText.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(inputText.includes(matrizCodigo[i][0])){
            inputText = inputText.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    document.getElementById('outputText').value = inputText;
}

function decryptText(){ 
    var encryptedText = document.getElementById('outputText').value;
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    encryptedText = encryptedText.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(encryptedText.includes(matrizCodigo[i][1])){
            encryptedText = encryptedText.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    alert('Texto desencriptado: ' + encryptedText);

}

function resetPage() {
    location.reload(); // Recarga la página para reiniciarla a su estado inicial
}

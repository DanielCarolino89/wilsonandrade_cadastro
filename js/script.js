function substituirFoto(event) {
    const inputFoto = event.target;
    const fotoCabecalho = document.getElementById('foto-cabecalho');

    // Verifica se há um arquivo selecionado
    if (inputFoto.files && inputFoto.files[0]) {
        const reader = new FileReader();

        // Carrega a imagem
        reader.onload = function (e) {
            // Substitui o conteúdo do div pela imagem
            fotoCabecalho.innerHTML = `<img src="${e.target.result}" alt="Foto enviada" style="width: 100%;">`;
        };

        // Lê o arquivo como uma URL de dados
        reader.readAsDataURL(inputFoto.files[0]);
    }
}

// Adiciona o evento de mudança ao input
document.getElementById('foto').addEventListener('change', substituirFoto);
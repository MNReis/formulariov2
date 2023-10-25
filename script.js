function enviarFormulario() {
  var nome = document.getElementById('nome').value;
  var senha = document.getElementById('senha').value;

  // Criar um objeto JSON
  var dados = {
    
    nome: nome,
    senha: senha
  };

  // Exibir no console
  console.log(JSON.stringify(dados));
}


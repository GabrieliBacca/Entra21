// Criar um site com um formulario que cadastre o endereco de um ususario
// Quando clicar no botão cadastrar, mostrar um confirm,caso o usuario clique sim, 
// mostrar um alerta com os dados do formulario
// Utilizar o evento "submit" do formulario

document.getElementById('enderecoForm').addEventListener('submit', function (e) {
   
    let formData = new FormData(e.target)

    let rua = formData.get('rua')
    let bairro = formData.get('bairro')
    let cidade = formData.get('cidade')

    let confirmacao = confirm("Rua: " + rua + "\nBairro: " + bairro + "\nCidade: " + cidade)
    if (confirmacao) {
        alert("Cadastro realizado com sucesso!\nRua: " + rua + "\nBairro: " + bairro + "\nCidade: " + cidade)
    }
})
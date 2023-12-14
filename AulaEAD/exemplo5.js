// Criar um site com um formulario que cadastre o endereco de um ususario
// Quando clicar no botão cadastrar, mostrar um confirm,caso o usuario clique sim, 
// mostrar um alerta com os dados do formulario
// Utilizar o evento "submit" do formulario

const novoEndereco = () =>{
    let texto = document.querySelector('.rua').value
    const button = document.createElement('submit');
    button.addEventListener("click", e =>{
        alert(texto)
    })

}
document.querySelector('.cadastrar').addEventListener('click', novoEndereco)

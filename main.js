// Utilização do fetch para fazer a requisição de uma api

const consultarCep = () => {
   
    let cepInserido = document.getElementById('cepInserido').value;

    let url = `https://api.postmon.com.br/v1/cep/${cepInserido}`;

    fetch(url).then(response =>{
    return response.json()}).then(body =>{

    document.getElementById('txtEndereco').value=body.logradouro;
    document.getElementById('txtBairro').value=body.bairro;
    document.getElementById('txtCep').value=body.cep;
    document.getElementById('txtCidade').value=body.cidade;
    document.getElementById('txtEstado').value=body.estado;
})
}

const limpaCep = () => {
    document.getElementById('txtNome').value='';
    document.getElementById('cepInserido').value='';
    document.getElementById('txtEndereco').value='';
    document.getElementById('txtBairro').value='';
    document.getElementById('txtCep').value='';
    document.getElementById('txtCidade').value='';
    document.getElementById('txtEstado').value='';
}
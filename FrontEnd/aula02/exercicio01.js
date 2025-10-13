const cpf = "123.456.789-10"
var nome = "Pedro"



function exibirSobreNome() {
    let sobreNome = "Almeida"
    return sobreNome
}

console.log(nome)
console.log(cpf)
console.log(exibirSobreNome())
console.log(`Meu nome é ${nome} e o sobreNome é ${exibirSobreNome()} e o meu CPF é ${cpf}`)
function encaminhar() {

    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let telefone = document.getElementById("tel").value

    let mensagem = "Olá!\n"
    mensagem += "Nome: " + nome + "\n"
    mensagem += "E-mail: " + email + "\n"
    mensagem += "WhatsApp: " + telefone

    let numero = "5588988888888"

    let link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

    window.open(link, "_blank")

}
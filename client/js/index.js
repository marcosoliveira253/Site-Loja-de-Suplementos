const shopContent = document.getElementById("shopContent");
const shopPromocoes = document.getElementById("shopPromocoes");
let produtosSelecionados = []; // Array para armazenar os produtos selecionados


function escolherProduto(produtoId, cor, nomeProduto, preco) {
    // Trocar a borda da caixinha do produto
    document.getElementById(produtoId).style.borderColor = cor;
    
    produtosSelecionados.push({nome: nomeProduto, preco: preco});
    console.log(produtosSelecionados);
    
}

produtos.forEach((produto, index) => {
    const content = document.createElement("div");
    content.classList.add("card");// Adiciona a classe "sua-classe" à div
    content.id = `${produto.nomeProduto}`; // Adiciona um ID único a cada div

    // Formata o preço do produto com duas casas decimais e substitui o ponto por uma vírgula
    let precoFormatado = produto.preco.toFixed(2).replace('.', ',');

    content.innerHTML = `
        <img src="${produto.img}">
        <h3>${produto.nomeProduto}</h3>
        <p>${produto.descricao}</p>
        <p><strong>R$ ${precoFormatado}</strong></p>
    `;
    shopContent.append(content);

     // Adiciona um evento onclick à div
    content.onclick = function() {
        escolherProduto(content.id, "green", produto.nomeProduto, produto.preco);
        document.getElementById(content.id).style.border = "3px solid green";
    };
    
});



promocoes.forEach((produto, index) => {
    const promo = document.createElement("div");
    promo.classList.add("card");// Adiciona a classe "sua-classe" à div
    promo.id = `${produto.nomeProduto}`; // Adiciona um ID único a cada div

    // Formata o preço do produto com duas casas decimais e substitui o ponto por uma vírgula
    let precoFormatado = produto.preco.toFixed(2).replace('.', ',');

    promo.innerHTML = `
        <img src="${produto.img}">
        <h3>${produto.nomeProduto}</h3>
        <p>${produto.descricao}</p>
        <p><strong>R$ ${precoFormatado}</strong></p>
    `;
    shopPromocoes.append(promo);

     // Adiciona um evento onclick à div
    promo.onclick = function() {
        escolherProduto(promo.id, "green", produto.nomeProduto, produto.preco);
        document.getElementById(promo.id).style.border = "3px solid green";
    };

});


function finalizarPedido() {
    let mensagem = "Olá, gostaria de pedir esses produto(s): ";

    produtosSelecionados.forEach((produto, index) => {
         // Formata o preço do produto com duas casas decimais e substitui o ponto por uma vírgula
        let precoFormatado = produto.preco.toFixed(2).replace('.', ',');

        // Adiciona o nome do produto à mensagem
        mensagem += produto.nome + " (R$ " + precoFormatado + ")";

        // Se não for o último produto, adiciona uma vírgula e um espaço
        if (index < produtosSelecionados.length -1) {
            mensagem += " , ";
        }
    });

    // Redefinir a cor da borda de cada produto selecionado para branco
    produtosSelecionados.forEach((produto) => {
        let elementoProduto = document.getElementById(produto.nome);
        if (elementoProduto) {
            elementoProduto.style.borderColor = "white";
        }
    });

    // Limpar o array de produtos selecionados
    produtosSelecionados = [];

    open("https://wa.me//5581995187088?text=" + mensagem)


}

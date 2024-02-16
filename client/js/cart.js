const modalContainer = document.getElementById("modal-container");
const modalCarrinho = document.getElementById("modal-carrinho");

const cartBtn = document.getElementById("cart-btn");

const cartContador = document.getElementById("cart-contador");


const displayCart = () => {
    modalContainer.innerHTML = "";

    modalContainer.style.display = "block";
    modalCarrinho.style.display = "block";
    // modal Header
    const modalHeader = document.createElement("div");

    const modalClose = document.createElement("div");
    modalClose.innerText = "❌";
    modalClose.className = "modal-close";
    modalHeader.append(modalClose);

    modalClose.addEventListener("click", () => {
        modalContainer.style.display = "none";
        modalCarrinho.style.display = "none";
    });

    const modalTitle = document.createElement("div");
    modalTitle.innerText = "Cart";
    modalTitle.className = "modal-title";
    modalHeader.append(modalTitle);

    modalContainer.append(modalHeader);

    // modal Body
    if (cart.length > 0) {
    cart.forEach((produto) => {
        const modalBody = document.createElement("div");
        modalBody.className = "modal-body";
        modalBody.innerHTML = `
        <div class="produto">
            <img class="produto-img" src="${produto.img}" />
            <div class="produto-info">
                <h4>${produto.nomeProduto}</h4>
            </div>
        
            <div class="quantidade">
                <span class="quant-btn-decrescent">-</span>
                <span class="quant-input">${produto.quantidade}</span>           
                <span class="quant-btn-crescent">+</span>
            </div>
            <div class="preco">R$ ${produto.preco * produto.quantidade}</div>
            <div class="delete-produto"><img src="./media/lixeira.png"></div>
        </div>
        `;
        modalContainer.append(modalBody);
        // Adiciona funcionalidade ao botão de incrementar
        const crescent = modalBody.querySelector(".quant-btn-crescent");
        crescent.addEventListener("click", () => {
            produto.quantidade++;
            displayCart();
            displayContador();
        })

        // Adiciona funcionalidade ao botão de decrementar
        const decrescent = modalBody.querySelector(".quant-btn-decrescent");
        decrescent.addEventListener("click", () => {
            if (produto.quantidade > 1) {
                produto.quantidade--;
                displayCart();
            }
            displayContador();
        });

        // Adiciona funcionalidade ao botão de deletar
        const deletar = modalBody.querySelector(".delete-produto");
        deletar.addEventListener("click", () => {
            deletarProduto(produto.id)
        })
    });

    // modal footer
    const total = cart.reduce((acc, el) => acc + el.preco * el.quantidade, 0);

    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";
    modalFooter.innerHTML = `
    <div class=""preco-total>Total: ${total}</div>
    `;
    modalContainer.append(modalFooter);
} else {
    const modalText = document.createElement("h2");
    modalText.className = "modal-body";
    modalText.innerText = "Seu carrinho está vazio!";
    modalContainer.append(modalText);
}
};



const deletarProduto = (id) => {
    const foundid = cart.findIndex((Element) => Element.id === id);
    cart.splice(foundid, 1);
    displayCart();
    displayContador();
};

const displayContador = () => {
    const cartLength = cart.reduce((acc, el) => acc + el.quantidade, 0);
    if (cartLength > 0) {
        cartContador.style.display = "block";
        cartContador.innerText = cartLength;
    } else {
        cartContador.style.display = "none";
    }
};

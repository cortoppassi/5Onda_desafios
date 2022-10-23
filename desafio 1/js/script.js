const produtos = [];
const botaoCadastrar = document.querySelector("#cadastrar");
const inputNome = document.querySelector("#nome");
const inputPreco = document.querySelector("#preco");
const inputQuantidade = document.querySelector("#quantidade");
const tabelaDeProdutos = document.querySelector("#tabelaDeProdutos");

function registrarProduto() {
  let produto = {
    nome: inputNome.value,
    preco: inputPreco.value,
    quantidade: inputQuantidade.value,
  };

  produtos.push(produto);

  listarProdutos();
}

function listarProdutos() {
  limparTabela();

  produtos.map((item) => {
    const elementoLinha = document.createElement("tr");

    const colunaNome = document.createElement("td");
    const colunaPreco = document.createElement("td");
    const colunaQuantidade = document.createElement("td");

    colunaNome.append(`${item.nome}`);
    colunaPreco.append(`${item.preco}`);
    colunaQuantidade.append(`${item.quantidade}`);

    elementoLinha.append(colunaNome);
    elementoLinha.append(colunaPreco);
    elementoLinha.append(colunaQuantidade);

    tabelaDeProdutos.append(elementoLinha);
  });
}

function limparTabela() {
  tabelaDeProdutos.innerHTML = "";
}

botaoCadastrar.addEventListener("click", () => {
  registrarProduto();
});

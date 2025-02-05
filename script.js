// Banco de dados
const tarefas = []; // mudado para const

// Função para adicionar uma nova tarefa
const adicionarTarefa = (novaTarefa) => {
  // Verificar se a tarefa está vazia
  if (novaTarefa.trim() === "") {
    alert("Por favor, adicione alguma coisa antes de continuar.");
    return;
  }

  // Adicionar a tarefa ao banco de dados
  tarefas.push(novaTarefa);
};

// Selecionar os elementos do HTML
const inputTarefa = document.querySelector("#novaTarefa");
const botaoAdicionar = document.querySelector("#adicionarTarefa");
const listaTarefas = document.querySelector("#listaTarefas");

// Adicionar evento de click no botão de adicionar
botaoAdicionar.addEventListener("click", () => {
  // Chamar a função de adicionar tarefa
  adicionarTarefa(inputTarefa.value);
  // Limpar o input
  inputTarefa.value = "";
  // Mostrar as tarefas
  mostrarTarefas();
});

// Função para mostrar as tarefas
const mostrarTarefas = () => {
  // Limpar a lista
  listaTarefas.innerHTML = "";
  // Loop para cada tarefa
  tarefas.forEach((tarefa, index) => {
    // Criar um container para a tarefa
    const tarefaContainer = document.createElement("div");
    tarefaContainer.classList.add("tarefa-container");
    // Criar um elemento de paragrafo para a tarefa
    const elementoTarefa = document.createElement("p");
    elementoTarefa.textContent = tarefa;
    // Criar botões de excluir e editar
    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    const botaoEditar = document.createElement("button");
    botaoEditar.textContent = "Editar";

    // Adicionar evento de click no botão de excluir
    botaoExcluir.addEventListener("click", () => {
      // Remover a tarefa do banco de dados
      tarefas.splice(index, 1);
      // Mostrar as tarefas
      mostrarTarefas();
    });

    // Adicionar evento de click no botão de editar
    botaoEditar.addEventListener("click", () => {
      // Criar um input para edição
      const inputEdicao = document.createElement("input");
      inputEdicao.type = "text";
      inputEdicao.value = tarefa;
      // Criar um botão de salvar
      const botaoSalvar = document.createElement("button");
      botaoSalvar.textContent = "Salvar";

      // Substituir o elemento de paragrafo pelo input
      tarefaContainer.replaceChild(inputEdicao, elementoTarefa);
      // Substituir o botão de editar pelo botão de salvar
      tarefaContainer.replaceChild(botaoSalvar, botaoEditar);

      // Adicionar evento de click no botão de salvar
      botaoSalvar.addEventListener("click", () => {
        // Verificar se o input está vazio
        if (inputEdicao.value.trim() === "") {
          alert("A tarefa não pode ser vazia.");
          return;
        }

        // Atualizar a tarefa no banco de dados
        tarefas[index] = inputEdicao.value;
        // Mostrar as tarefas
        mostrarTarefas();
      });
    });

    // Adicionar os elementos ao container
    tarefaContainer.appendChild(elementoTarefa);
    tarefaContainer.appendChild(botaoExcluir);
    tarefaContainer.appendChild(botaoEditar);

    // Adicionar o container à lista
    listaTarefas.appendChild(tarefaContainer);
  });
};


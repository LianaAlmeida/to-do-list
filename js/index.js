function novaAtividade(){
    overlay.classList.add("active");
    modal.classList.add("active");
    criar.classList.add("active");
}

function confirmarExclusao(id){
    overlay.classList.add("active");
    modal.classList.add("active");
    confirmacao.classList.add("active");
    deleteID = id
};

function fecharModal(){
    overlay.classList.remove("active");
    modal.classList.remove("active");
    criar.classList.remove("active");
    confirmacao.classList.remove("active");
}

document.addEventListener('keyup', (evento) => {
    if(evento.key == "Escape"){
        fecharModal();
    }
})

let atividades = [
    {
        id: 1,
        titulo:"Acordar",
        descricao:"Fazer café e preparar as mninas para escola"
    },

    {
        id: 2,
        titulo:"Aula",
        descricao:"Levar as meninas para escola e Ir para o curso de FullStack"
    },

    {
        id: 3,
        titulo:"Comer",
        descricao:"Preprar o almoço e lanches"
    },

    {
        id: 4,
        titulo:"Atividade das meninas",
        descricao:"Natação e Aula de ginástica"
    },

    {
        id: 5,
        titulo:"Jantar",
        descricao:"Preprar o Jantar"
    },

    {
        id: 6,
        titulo:"Estudar",
        descricao:"Depois que todos dormem"
    },
];

let deleteID = 0;

function listarAtividades(){
    lista.innerHTML = "";
    atividades.map((atividade) => {
        lista.innerHTML += `
        <li>
            <div>
                <h5>${atividade.titulo}</h5>
                <p>${atividade.descricao}</p>
            </div>
            <div>
                <box-icon name='trash' onclick="confirmarExclusao(${atividade.id})""></box-icon>  
            </div>                
        </li>
        `;
    })
}

listarAtividades();

function adicionarAtividade(){
    event.preventDefault();
    let atividade = {
        id: tarefas.length,
        titulo: titulo.value,
        descricao: descricao.value
    }
    atividades.push(atividade)
    fecharModal();
    listarAtividades();
}

function deletarAtividade(){
    let atividadesFiltradas = [];
    atividadesFiltradas = atividades.filter(atividade =>{
        if(atividade.id != deleteID){
            return atividade;
        }
    });
    atividades = atividadesFiltradas;
    localStorage.setItem("atividades", JSON.stringify(atividades));
    fecharModal();
    listarAtividades();
}
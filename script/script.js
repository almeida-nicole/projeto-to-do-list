const tarefaComposerButton = document.querySelector(".tarefa-composer__button");
const tarefaComposerInput = document.getElementById("tarefaComposerInput");
const listaTarefas = document.querySelector(".lista-tarefas");
const listaTarefasItem = document.querySelector(".lista-tarefas__item");

tarefaComposerButton.addEventListener("click", function(event){
    event.preventDefault();

    if (tarefaComposerInput.value == null || tarefaComposerInput.value == undefined || tarefaComposerInput.value == "" || tarefaComposerInput.value == " "){
        console.log("Escreva uma tarefa");
        tarefaComposerInput.focus();
        return false;
    }

    const div = document.createElement("div");
    div.classname = "tarefaBox";

    const checkboxTarefaButton = document.createElement("div");
    checkboxTarefaButton.className = "item__checkbox";
    checkboxTarefaButton.innerHTML =
    `<div class="tarefas-lista">
        <div class="lista-tarefas__item">
            <div class="lista-tarefas__item-checkbox">
                <input class="lista-tarefas__checkbox" type="checkbox" id="Checked-box">
                <label for="Checked-box">${tarefaComposerInput.value}</label>
            </div>
        <button class="lista-tarefas__delete-button" onclick="deletar_esta_merda(this)">x</button>
        </div>
    </div>`

    div.appendChild(checkboxTarefaButton);
    listaTarefas.appendChild(div);

    tarefaComposerInput.value = ""

})

    const boxChecked = document.querySelector("input")
    const itemChecked = document.querySelector("label")



    if (boxChecked.checked) {
        itemChecked.style.textDecoration = line-through;
        console.log(boxChecked)
    }




function deletar_esta_merda (event2){
    let item = event2.parentNode
    item.remove();
}

function checkAll(o) {
    var boxes = document.getElementsByTagName("input");
    for (let i = 0; i < boxes.length; i++) {
      let boxChecked = boxes[i];
      if (boxChecked.type == "checkbox") {
        if (boxChecked.name != "check")
        boxChecked.checked = o.checked;
        
      }
    }
  }

  const deleteAllButton = document.querySelector(".lista-tarefas__delete-all-button");
  const allCheckboxes = document.getElementById("allCheckboxes");
  const tarefasCheckbox = document.querySelector(".lista-tarefas__checkbox")
//   const boxChecked = document.querySelector("input")




    // allCheckboxes[allCheckboxes.selectedIndex].remove()
//   })

//   const deleteAllButton = document.querySelectorAll(".lista-tarefas__delete-button");

//   tarefaDeleteButton.addEventListener("click", function(event2){
//       event2.preventDefault();
//       div.remove();
//       console.log("Tarefa apagada");
//   })

// function deletarTodas (event2){
//     var itens = document.getElementsByTagName("input");
//     for (var i = 0; x < itens.length; i++) {
//       var itensChecados = itens[x];
//       if (itensChecados.type == "checkbox") {
//           itensChecados.remove();
// }
//     }
// }

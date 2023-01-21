//Bajo demanda, no es necesario el paréntesis ald final ToDoPost()
$("#ButtonPost").click(ToDoPost)
$("#ButtonClear").click(ToDoClear)
$("#ButtonMark").click(ToDoMark)
$("#ButtonDelete").click(ToDoDelete)

function ToDoPost(e){
    //Evitar que se dispare el evento del formulario, recargar página
    e.preventDefault()
    //Recupera valor del cuadro de texto
    let toDo = $("#ToDoText").val()
    $("#ToDoList").append(`<input type="checkbox" name="toDo" /> <label>${toDo}</label> <br>`)
}

function ToDoMark(){
    //Guardar en un arreglo todas las checkbox con el mismo identificador
    let toDos = $("[name='toDo']")

    for(let i = 0; i < toDos.length; i++){
        toDos[i].checked = true
    }
}

function ToDoClear(){
    let toDos = $("[name='toDo']")

    for(let i = 0; i < toDos.length; i++){
        toDos[i].checked = false
    }
}

function ToDoDelete(){
    //En vez de borrar la etiqueta .remove, se sobreescribe
    $("#ToDoList").html("")
}
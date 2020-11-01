registros =[]
function processar() {
    const formulario = document.forms['usuarioForm'];
    const registro = {
        "nome" : formulario.elements[0].value,
        "idade" : formulario.elements[1].value,
        "local": formulario.elements[2].value,
        "corFavorita" : formulario.elements[3].value
    };

    registros.push(registro);
    formulario.reset();
    formulario.elements[0].focus();
    console.log(registros);
    console.table(registros);
}




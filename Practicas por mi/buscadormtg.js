document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();

    const tipoDeBusqueda = document.getElementById('buscarTipo').value;
    const valorDeBusqueda = document.getElementById('buscarValor').value;

    let resultados = [];

    // Filtrar las cartas según el tipo de búsqueda seleccionado
    if (tipoDeBusqueda == 'nombre') {
        resultados = cartasMTG.filter(carta => carta.carta.toLowerCase().includes(valorDeBusqueda.toLowerCase()));
    } else if (tipoDeBusqueda === 'autor') {
        resultados = cartasMTG.filter(carta => carta.autor.toLowerCase().includes(valorDeBusqueda.toLowerCase()));
    } else if (tipoDeBusqueda === 'costo') {
        resultados = cartasMTG.filter(carta => carta.costo.toString() === valorDeBusqueda);
    } else if (tipoDeBusqueda === 'año') {
        resultados = cartasMTG.filter(carta => carta.añoDePublicacion.toString() === valorDeBusqueda);
    }
    // Puedes agregar más casos según los tipos de búsqueda disponibles

    if (resultados.length > 0) {
        // Si se encuentran cartas, mostrar los resultados
        let resultadoString = `Se encontraron cartas que coinciden con la búsqueda por ${tipoDeBusqueda}:\n\n`;
        resultados.forEach(carta => {
            resultadoString += `${carta.carta} (${carta.autor}, ${carta.costo}, ${carta.añoDePublicacion})\n`;
        });
        alert(resultadoString);
        console.log(resultados);
    } else {
        // Si no se encuentran cartas, mostrar un mensaje indicando que no se encontraron
        alert(`No se encontraron cartas que coincidan con la búsqueda por ${tipoDeBusqueda}.`);
    }
});

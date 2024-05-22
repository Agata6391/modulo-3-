document.getElementById('numberForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const input = document.getElementById('numberInput').value;
    const errorMessage = document.getElementById('errorMessage');
    const inputControl = document.getElementById('numberInput');
    try {
        if (isNaN(input) || input.trim() === '') {
            //si no es numero  o esta vacio, lanzamos un error
            throw new Error('Por favor ingresa un numero valido');
        }
        errorMessage.textContent = '';
        alert('Numero Valido' + input);
    } catch (error) {
        errorMessage.textContent = error.message;
    }finally{
        alert('gracias por usar mi software');
        inputControl.value = '';
    }
});
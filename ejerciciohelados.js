
document.addEventListener("DOMContentLoaded", function () {
    const productoSelect = document.querySelector("select[name='producto']");
    const cantidadInput = document.querySelector("input[name='cantidad']");
    const calcularButton = document.getElementById("calcular");
    const resultadoDiv = document.getElementById("resultado");

    calcularButton.addEventListener("click", function () {
        const producto = productoSelect.value;
        const cantidad = parseInt(cantidadInput.value);

        let precioUnitario = 0;

        switch (producto) {
            case "chocolate":
                precioUnitario = 2.5;
                break;
            case "coco":
                precioUnitario = 3.0;
                break;
            case "mani":
                precioUnitario = 2.8;
                break;
            case "fresa":
                precioUnitario = 2.7;
                break;
        }

        const subtotal = precioUnitario * cantidad;
        const iva = subtotal * 0.19;
        const total = subtotal + iva;

        resultadoDiv.innerHTML = `
            <p>Subtotal: $${subtotal.toFixed(2)}</p>
            <p>IVA (19%): $${iva.toFixed(2)}</p>
            <p>Total: $${total.toFixed(2)}</p>
        `;
    });
});

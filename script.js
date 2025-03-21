function actualizarCuentaRegresiva() {
    let ahora = new Date();
    let objetivo = new Date(2025, 2, 21, 0, 0, 0);
    let diferencia = objetivo - ahora;

    if (diferencia < 0) {
        document.getElementById("cuentaRegresiva").innerHTML = "!YA PUEDES VER LOS RESULTADOS!";

        // Crear el enlace dinámicamente
        let enlace = document.createElement("a");
        enlace.href = "https://www.pronabec.gob.pe/beca-18/#basesbeca18"; // Reemplaza con la URL deseada
        enlace.innerText = "Haz clic aquí para ver los resultados";
        enlace.style.display = "block";
        enlace.style.marginTop = "20px";
        enlace.style.fontSize = "18px";
        enlace.style.color = "#007bff";
        enlace.style.textDecoration = "none";
        enlace.style.fontWeight = "bold";

        // Agregar el enlace debajo del mensaje
        document.getElementById("cuentaRegresiva").appendChild(enlace);

        clearInterval(intervalo);
        return;
    }

    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;
}

let intervalo = setInterval(actualizarCuentaRegresiva, 1000);
actualizarCuentaRegresiva();

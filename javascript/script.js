// ==========================================
// SCRIPT.JS
// Control principal del proyecto
// ==========================================

const btn = document.getElementById("btn");
const titulo = document.getElementById("titulo");
const mensaje = document.getElementById("mensaje");
const nombre = document.getElementById("nombre");
const flash = document.getElementById("flash");

btn.addEventListener("click", iniciarViaje);

function iniciarViaje() {

    btn.disabled = true;

    // Ocultar interfaz
    btn.style.opacity = "0";
    titulo.style.opacity = "0";

    document.body.classList.add("shake");

    // Activar efectos de cámara
    Engine.camera.shake = 20;
    Engine.camera.targetZoom = 2.4;

    let velocidad = 1;

    const viaje = setInterval(() => {

        velocidad += 0.3;

        warpSpeed = velocidad;

        if (velocidad >= 12) {
            warpMode = true;
        }

        if (velocidad >= 50) {

            clearInterval(viaje);

            flash.style.opacity = 1;

            document.body.classList.remove("shake");

            setTimeout(() => {

                flash.style.opacity = 0;

                // Restaurar cámara
                Engine.camera.targetZoom = 1;
                Engine.camera.shake = 0;

                // Mostrar galaxia
                showGalaxy = true;

                // Salir del modo Warp
                warpMode = false;
                warpSpeed = 0.3;

                mostrarMensaje();

            }, 700);

        }

    }, 30);

}

function mostrarMensaje() {

    nombre.innerHTML = "✨ PARA TI ❤️ ✨";

    mensaje.innerHTML = `
En un universo con miles de millones de estrellas...

existen miles de millones de galaxias.

Cada una guarda una historia diferente.

Pero entre todas ellas...

solo existe una persona como tú.

Que nunca se apague tu luz.

Que nunca dejes de soñar.

Que cada nuevo año te acerque a todo aquello que deseas.

Y que la felicidad siempre encuentre el camino hacia ti.

🌌✨

¡¡FELIZ CUMPLEAÑOS!! 🎂🎉
`;

    nombre.style.opacity = "1";
    mensaje.style.opacity = "1";

}
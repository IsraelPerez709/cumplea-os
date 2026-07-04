// ==========================================
// NEBULA.JS
// Nebulosa animada
// ==========================================

let nebulaTime = 0;

function drawNebula(ctx, canvas) {

    nebulaTime += 0.002;

    const x = canvas.width / 2 + Math.sin(nebulaTime) * 120;
    const y = canvas.height / 2 + Math.cos(nebulaTime) * 80;

    // Nebulosa morada
    let gradient = ctx.createRadialGradient(
        x,
        y,
        80,
        x,
        y,
        700
    );

    gradient.addColorStop(0, "rgba(140,0,255,0.22)");
    gradient.addColorStop(0.4, "rgba(80,0,180,0.12)");
    gradient.addColorStop(1, "rgba(0,0,0,0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Nebulosa azul
    gradient = ctx.createRadialGradient(
        canvas.width * 0.75,
        canvas.height * 0.35,
        50,
        canvas.width * 0.75,
        canvas.height * 0.35,
        500
    );

    gradient.addColorStop(0, "rgba(0,180,255,0.12)");
    gradient.addColorStop(1, "rgba(0,0,0,0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

}
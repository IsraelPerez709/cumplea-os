// ==========================================
// UNIVERSE.JS
// Motor principal del Canvas
// ==========================================

const canvas = document.getElementById("universe");
const ctx = canvas.getContext("2d");


function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    createStars(canvas);
    createGalaxy();
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

function animate(){

    Engine.update();

    ctx.save();

    ctx.translate(
    Engine.camera.x,
    Engine.camera.y
    );

    ctx.scale(
        Engine.camera.zoom,
        Engine.camera.zoom
    );

    ctx.fillStyle="#02030f";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    drawNebula(ctx, canvas);

    updateGalaxy();
    drawGalaxy(ctx, canvas);

    updateStars(canvas);
    drawStars(ctx, canvas);

    updatePlanets();
    drawPlanets(ctx);

    updateShootingStars(canvas);
    drawShootingStars(ctx);

    ctx.restore();

    requestAnimationFrame(animate);

}

animate();
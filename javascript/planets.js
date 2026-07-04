// ==========================================
// PLANETS.JS
// Sistema de planetas
// ==========================================

const planets = [

    {
        name: "Earth",

        x: 250,
        y: 220,

        radius: 45,

        color: "#3b82f6",

        glow: "#60a5fa",

        speed: 0.002,

        angle: 0
    },

    {
        name: "Saturn",

        x: 900,
        y: 420,

        radius: 70,

        color: "#d4b483",

        glow: "#ffe7b3",

        speed: 0.001,

        angle: 0
    },

    {
        name: "Moon",

        x: 650,
        y: 150,

        radius: 25,

        color: "#dcdcdc",

        glow: "#ffffff",

        speed: 0.003,

        angle: 0
    }

];

function updatePlanets(){

    planets.forEach(planet=>{

        planet.angle += planet.speed;

    });

}

function drawPlanets(ctx){

    planets.forEach(planet=>{

        const moveX = Math.sin(planet.angle) * 15;
        const moveY = Math.cos(planet.angle) * 15;

        // Brillo
        ctx.beginPath();

        ctx.arc(

            planet.x + moveX,

            planet.y + moveY,

            planet.radius + 12,

            0,

            Math.PI * 2

        );

        ctx.fillStyle = planet.glow + "22";

        ctx.fill();

        // Planeta
        ctx.beginPath();

        ctx.arc(

            planet.x + moveX,

            planet.y + moveY,

            planet.radius,

            0,

            Math.PI * 2

        );

        ctx.fillStyle = planet.color;

        ctx.shadowBlur = 30;

        ctx.shadowColor = planet.glow;

        ctx.fill();

        // Anillo de Saturno
        if(planet.name === "Saturn"){

            ctx.save();

            ctx.translate(

                planet.x + moveX,

                planet.y + moveY

            );

            ctx.rotate(-0.4);

            ctx.beginPath();

            ctx.ellipse(

                0,

                0,

                planet.radius + 18,

                planet.radius - 20,

                0,

                0,

                Math.PI * 2

            );

            ctx.strokeStyle = "#f8e7b5";

            ctx.lineWidth = 4;

            ctx.stroke();

            ctx.restore();

        }

    });

    ctx.shadowBlur = 0;

}
// ==========================================
// SHOOTINGSTARS.JS
// Sistema de meteoritos
// ==========================================

const shootingStars = [];

function createShootingStar(canvas){

    shootingStars.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height * 0.3,

        speed: 12 + Math.random() * 10,

        length: 150 + Math.random() * 120,

        size: 2 + Math.random() * 2,

        opacity: 1

    });

}

function updateShootingStars(canvas){

    for(let i = shootingStars.length - 1; i >= 0; i--){

        const star = shootingStars[i];

        star.x += star.speed;
        star.y += star.speed;

        star.opacity -= 0.003;

        if(
            star.x > canvas.width + 300 ||
            star.y > canvas.height + 300 ||
            star.opacity <= 0
        ){

            shootingStars.splice(i,1);

        }

    }

}

function drawShootingStars(ctx){

    shootingStars.forEach(star=>{

        // Cola
        const gradient = ctx.createLinearGradient(

            star.x,

            star.y,

            star.x - star.length,

            star.y - star.length

        );

        gradient.addColorStop(0,`rgba(255,255,255,${star.opacity})`);
        gradient.addColorStop(1,"rgba(255,255,255,0)");

        ctx.beginPath();

        ctx.moveTo(star.x,star.y);

        ctx.lineTo(

            star.x-star.length,

            star.y-star.length

        );

        ctx.strokeStyle = gradient;

        ctx.lineWidth = star.size;

        ctx.stroke();

        // Cabeza brillante
        ctx.beginPath();

        ctx.arc(

            star.x,

            star.y,

            star.size*1.8,

            0,

            Math.PI*2

        );

        ctx.fillStyle=`rgba(255,255,255,${star.opacity})`;

        ctx.shadowBlur=25;

        ctx.shadowColor="white";

        ctx.fill();

    });

    ctx.shadowBlur=0;

}

// Crear un meteorito cada cierto tiempo
setInterval(()=>{

    if(typeof canvas !== "undefined"){

        createShootingStar(canvas);

    }

},2500);
// ==========================================
// STARS.JS
// Sistema de estrellas v0.5
// ==========================================

const stars = [];

const STAR_COUNT = 1200;

// Velocidad del viaje
let warpSpeed = 1;

// ¿Estamos viajando?
let warpMode = false;

// Posición del mouse
const mouse = {

    x: window.innerWidth / 2,
    y: window.innerHeight / 2

};

window.addEventListener("mousemove", (e)=>{

    mouse.x = e.clientX;
    mouse.y = e.clientY;

});

window.addEventListener("touchmove",(e)=>{

    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;

});

function createStars(canvas){

    stars.length = 0;

    for(let i=0;i<STAR_COUNT;i++){

        const layer = Math.floor(Math.random()*3);

        let radius;
        let speed;

        switch(layer){

            case 0:

                radius = Math.random()*1+0.3;
                speed = 0.08;
                break;

            case 1:

                radius = Math.random()*1.8+0.8;
                speed = 0.18;
                break;

            default:

                radius = Math.random()*2.8+1.5;
                speed = 0.35;

        }

        stars.push({

            x:Math.random()*canvas.width,

            y:Math.random()*canvas.height,

            radius,

            speed,

            alpha:Math.random(),

            twinkle:Math.random()*0.03,

            layer

        });

    }

}

function updateStars(canvas){

    stars.forEach(star=>{

        // Brillo
        star.alpha += (Math.random()-0.5)*star.twinkle;

        if(star.alpha<0.2) star.alpha=0.2;
        if(star.alpha>1) star.alpha=1;

        // Movimiento
        star.y += star.speed*warpSpeed;

        if(star.y>canvas.height){

            star.y=-10;
            star.x=Math.random()*canvas.width;

        }

    });

}

function drawStars(ctx,canvas){

    const offsetX=(mouse.x-canvas.width/2)*0.012;
    const offsetY=(mouse.y-canvas.height/2)*0.012;

    stars.forEach(star=>{

        let color="255,255,255";

        if(star.layer===1)
            color="180,220,255";

        if(star.layer===2)
            color="255,235,180";

        const x=star.x+offsetX*(star.layer+1);
        const y=star.y+offsetY*(star.layer+1);

        ctx.shadowBlur=star.radius*7;
        ctx.shadowColor="white";

        if(warpMode){

            ctx.beginPath();

            ctx.moveTo(x,y);

            ctx.lineTo(

                x,

                y-(star.speed*warpSpeed*10)

            );

            ctx.strokeStyle=`rgba(${color},${star.alpha})`;

            ctx.lineWidth=star.radius;

            ctx.stroke();

        }

        else{

            ctx.beginPath();

            ctx.arc(

                x,

                y,

                star.radius,

                0,

                Math.PI*2

            );

            ctx.fillStyle=`rgba(${color},${star.alpha})`;

            ctx.fill();

        }

    });

    ctx.shadowBlur=0;

}
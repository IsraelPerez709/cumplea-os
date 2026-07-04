// ==========================================
// GALAXY.JS V2
// Galaxia Cinemática
// ==========================================

const galaxy = [];

const GALAXY_PARTICLES = 5000;

let galaxyRotation = 0;

let galaxyOpacity = 0;

let showGalaxy = false;

function createGalaxy(){

    galaxy.length = 0;

    for(let i=0;i<GALAXY_PARTICLES;i++){

        const arm=Math.floor(Math.random()*4);

        const distance=Math.pow(Math.random(),0.55)*550;

        const angle=(arm*Math.PI/2)+(distance*0.035)+(Math.random()-0.5)*0.8;

        galaxy.push({

            distance,

            angle,

            size:Math.random()*2+0.2,

            alpha:0.2+Math.random()*0.8,

            depth:Math.random()

        });

    }

}

function updateGalaxy(){

    galaxyRotation+=0.001;

    if(showGalaxy && galaxyOpacity<1){

        galaxyOpacity+=0.01;

    }

}

function drawGalaxy(ctx,canvas){

    if(galaxyOpacity<=0) return;

    const cx=canvas.width/2;
    const cy=canvas.height/2;

    galaxy.forEach(star=>{

        const angle=star.angle+galaxyRotation;

        const x=cx+Math.cos(angle)*star.distance;

        const y=cy+Math.sin(angle)*star.distance*0.45;

        const radius=star.size*(1+star.depth);

        const alpha=star.alpha*galaxyOpacity;

        const hue=190+star.depth*90;

        ctx.beginPath();

        ctx.arc(x,y,radius,0,Math.PI*2);

        ctx.fillStyle=`hsla(${hue},100%,80%,${alpha})`;

        ctx.shadowBlur=20;

        ctx.shadowColor="white";

        ctx.fill();

    });

    // Núcleo

    const core=ctx.createRadialGradient(

        cx,cy,0,

        cx,cy,220

    );

    core.addColorStop(0,"rgba(255,255,255,1)");

    core.addColorStop(0.15,"rgba(160,220,255,.95)");

    core.addColorStop(.35,"rgba(120,120,255,.55)");

    core.addColorStop(1,"rgba(0,0,0,0)");

    ctx.fillStyle=core;

    ctx.beginPath();

    ctx.arc(cx,cy,220,0,Math.PI*2);

    ctx.fill();

    // Agujero negro

    ctx.beginPath();

    ctx.arc(cx,cy,18,0,Math.PI*2);

    ctx.fillStyle="black";

    ctx.fill();

    ctx.shadowBlur=0;

}
// ==========================================
// ENGINE.JS
// Motor principal del universo v2
// ==========================================

const Engine = {

    time: 0,

    lastTime: performance.now(),

    delta: 0,

    fps: 60,

    camera: {

        x: 0,
        y: 0,

        zoom: 1,
        targetZoom: 1,

        shake: 0

    },

    update() {

        const now = performance.now();

        this.delta = (now - this.lastTime) / 1000;

        this.lastTime = now;

        this.time += this.delta;

        // Zoom suave
        this.camera.zoom +=
            (this.camera.targetZoom - this.camera.zoom) * 0.05;

        // Movimiento flotante
        this.camera.x = Math.sin(this.time * 0.25) * 15;
        this.camera.y = Math.cos(this.time * 0.18) * 10;

        // Vibración
        if (this.camera.shake > 0) {

            this.camera.shake *= 0.94;

            this.camera.x +=
                (Math.random() - 0.5) * this.camera.shake;

            this.camera.y +=
                (Math.random() - 0.5) * this.camera.shake;

            if (this.camera.shake < 0.05) {

                this.camera.shake = 0;

            }

        }

    }

};
class Stopwatch {
    constructor() {
        this.DOM = {
            container: document.querySelector('.stopwatch'),
            time: {
                hrs: document.querySelector('.time__hours'),
                min: document.querySelector('.time__minutes'),
                sec: document.querySelector('.time__seconds'),
                mSec: document.querySelector('.time__milliseconds')
            },
            start: document.querySelector('.control__btn--start'),
            continue: document.querySelector('.control__btn--continue'),
            stop: document.querySelector('.control__btn--stop')
            save: document.querySelector('.control__btn--save')
        };
        this.state = {};
        this.init();
    }
    reset() {

    }
    renderTime() {
        // Update changes on the DOM

        // get time elapsed
        // update DOM at different intervals
        clearInterval(this.state.elapsed);
        this.state.elapsed = setInterval(() => {
            let timeElapsed = Date.now() - this.state.startTime;
            this.DOM.time.mSec.innerHTML = timeElapsed % 1000;
            this.DOM.time.sec.innerHTML = Math.floor((timeElapsed / 1000) % 60);
            this.DOM.time.min.innerHTML = Math.floor((timeElapsed / (1000 * 60)) % 60);
            this.DOM.time.hrs.innerHTML = Math.floor((timeElapsed / (1000 * 60 * 60)) % 24);
        }, 1);
    }
    start(reset) {
        console.log('start');
        // Set start time used for future calculations
        if (reset) this.state.startTime = new Date();

        // Render to DOM
        this.renderTime();
        
    }
    continue() {
        this.start(false);
    }
    stop() {
        console.log('stop');
        clearInterval(this.state.elapsed);
    }
    save() {

    }
    init() {
        console.log('Stopwatch initilized');
        this.DOM.start.addEventListener('click', this.start.bind(this));
        this.DOM.stop.addEventListener('click', this.stop.bind(this));
        this.DOM.continue.addEventListener('click', this.continue.bind(this));
    }
}
const stopwatch = new Stopwatch();
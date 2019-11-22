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
            stop: document.querySelector('.control__btn--stop'),
            save: document.querySelector('.control__btn--save'),
            laps: document.querySelector('.laps__list')
        };
        this.state = {
            laps: []
        };
        this.init();
    }
    reset() {

    }
    renderTime() {

        // update DOM at different intervals
        clearInterval(this.state.elapsed);
        this.state.elapsed = setInterval(() => {
            // Use one variable to determine time ellapsed, not allowing each value to exceed natural bounds
            this.state.timeElapsed = Date.now() - this.state.startTime;
            // Set time in state
            this.state.time = {
                hrs: Math.floor((this.state.timeElapsed / (1000 * 60 * 60)) % 24),
                mins: Math.floor((this.state.timeElapsed / (1000 * 60)) % 60),
                secs: Math.floor((this.state.timeElapsed / 1000) % 60),
                mSecs: this.state.timeElapsed % 1000,
            }

            this.DOM.time.mSec.innerHTML = this.state.time.mSecs;
            this.DOM.time.sec.innerHTML = this.state.time.secs;
            this.DOM.time.min.innerHTML = this.state.time.mins;
            this.DOM.time.hrs.innerHTML = this.state.time.hrs;

        }, 1);
    }
    start(reset) {
        console.log('start');
        // Set start time used for future calculations, resets start time if specified
        if (reset) this.state.startTime = new Date();
        // Render to DOM
        this.renderTime();
        
    }
    continue() {
        this.start(false);
    }
    stop() {
        console.log('stop');
        // clears the last interval to stop the watch but does not reset the time
        clearInterval(this.state.elapsed);
    }
    save() {
        console.log('save lap');
        console.log(this.state)
        // Stop timer
        this.stop();
        // stops saving duplicate laps
        if (this.state.previous === this.state.time) return
        // get lap time
        const time = this.state.time;
        this.state.laps.push(time);
        this.state.previous = this.state.time;
        console.log(time)
        // create element
        const numberFormat = this.state.laps.length < 10 ? `0${this.state.laps.length}` : this.state.laps.length;
        const li = `
        <li data-lap="${this.state.laps.length}" data-time="${this.state.timeElapsed}">
        <span class="laps__list__number">${numberFormat}.</span>${time.hrs}:${time.mins}:${time.secs}:${time.mSecs}</li>
        `;
        // append element
        this.DOM.laps.innerHTML += li;

    }
    clearLaps() {
        // Remove all laps from page and state
        this.DOM.laps.innerHTML = '';
        this.state.laps = [];
    }
    init() {
        console.log('Stopwatch initilized');
        this.DOM.start.addEventListener('click', this.start.bind(this));
        this.DOM.stop.addEventListener('click', this.stop.bind(this));
        this.DOM.continue.addEventListener('click', this.continue.bind(this));
        this.DOM.save.addEventListener('click', this.save.bind(this));
    }
}
const stopwatch = new Stopwatch();
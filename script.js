class Stopwatch {
    constructor() {
        this.DOM = {
            container: document.querySelector('.stopwatch'),
            time: {
                hours: document.querySelector('.time__hours'),
                min: document.querySelector('.time__minutes'),
                sec: document.querySelector('.time__seconds'),
                milSec: document.querySelector('.time__milliseconds')
            },
            start: document.querySelector('.control__btn--start'),
            stop: document.querySelector('.control__btn--stop')
        };
        this.state = {};
        this.init()
    }
    reset() {

    }
    start() {
        console.log('start')

    }
    stop() {
        console.log('stop')

    }
    init() {
        console.log('Stopwatch initilized');
        this.DOM.start.addEventListener('click', this.start);
        this.DOM.stop.addEventListener('click', this.stop);
    }
}
const stopwatch = new Stopwatch();
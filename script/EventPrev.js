export class EventPrev {
    constructor(event) {
        this.event = event;
        this._setContainer();
        this.render();
    }
    _setContainer(){
        this.container = document.getElementById("Next-event")
    }
    render(){
        this.container.innerHTML = `
            <div class="Next-event-title">${this.event.title}</div>
            <div class="Next-event-description">${this.event.description}</div>
            <div class="Next-event-details">
                <div class="Details-element">
                    <img class="calendar-img" src="img/calendar.svg" alt="calendar-img">
                    <span>${this.event.date.getDate()}. ${this.event.date.getMonth()}.</span>
                </div>
                <div class="Details-element">
                    <img class="map-img" src="img/map.svg" alt="map-img">
                    <span>${this.event.place}</span>
                </div>
                <div class="EmptySpace--expand"></div>
                <a class="Web-akce-button" href=${this.event.event_url} target="_blank"><img class="Prev-event-info-img" src="img/facebook-logo.svg"></a>
            </div>
        `
    }
}
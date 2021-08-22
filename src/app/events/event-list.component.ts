import { Component } from "@angular/core";

@Component({
  selector: 'event-list',
  template: `
  <div>
  <h2>Upcoming Angular Events</h2>
  <hr />
  <event-thumbnail [event]="event1"></event-thumbnail>
  </div>
`
})

export class EventListComponent{

  event1={
    id: 1,
    name: 'Angular Connect',
    date: '9/09/2021',
    time: '10:20 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location:{
      address: ' 1057 DT',
      city: ' London',
      country: 'England'
    }
  }
}

import { Component } from "@angular/core";

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html'
})

export class EventListComponent{

  event={
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

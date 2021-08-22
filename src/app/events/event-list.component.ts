import { Component, OnInit } from "@angular/core";
import { ToastrService } from "../common/toastr.service";
import { EventService } from "./shared/event.service";


// declare toastr globally
declare let toastr: any

@Component({
  selector: 'event-list',
  template: `
  <div>
  <h2>Upcoming Angular Events</h2>
  <hr />
  <div class="row">
    <div class="col-md-5" *ngFor="let event of events">
      <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
    </div>
  </div>
  </div>
`
})

export class EventListComponent implements OnInit{
  events: any[] = [];
  toastr: any;
  constructor(private eventService: EventService, private toastrService: ToastrService){

  }
  ngOnInit(): void {
    this.events = this.eventService.getEvents()
    throw new Error("Method not implemented.");
  }

  // ngOnInit(){
  //   this.events = this.eventService.getEvents()
  // }


  handleThumbnailClick(eventName: any){
    this.toastr.success(eventName)
  }

}

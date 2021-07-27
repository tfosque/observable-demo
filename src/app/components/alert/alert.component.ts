import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  @Input() alerts = new BehaviorSubject<any>([]);

  constructor() {}

  ngOnInit(): void {
    // this.alerts.next([{ label: 'Notification', hide: false }]);
    // console.log('alerts:', this.alerts.value);
  }
}

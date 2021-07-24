import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-selected-button',
  templateUrl: './selected-button.component.html',
  styleUrls: ['./selected-button.component.scss'],
})
export class SelectedButtonComponent implements OnInit {
  @Input() btn_name = new BehaviorSubject<any>('');
  constructor() {}

  ngOnInit(): void {}
}

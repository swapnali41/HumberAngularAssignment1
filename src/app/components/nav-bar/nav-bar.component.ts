import { Component,EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
@Output() close: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}

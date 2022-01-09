import { Component } from '@angular/core';

const enum Subscription {
  BASIC = 'basic',
  ADVANCED = 'advanced',
  PRO = 'PRO'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sub
}

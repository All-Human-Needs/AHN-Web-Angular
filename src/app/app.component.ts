import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <ahn-banner></ahn-banner>
  <router-outlet></router-outlet>
  `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'All Human Needs';
}

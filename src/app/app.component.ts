import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <div style="position: relative;width: auto%;height: 213px;left: 0px;top: 2px;background: #828282;">
  <h1>Hello {{title}}</h1>
  </div>
  <router-outlet></router-outlet>

  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent  { 
  title = 'AHN'; 
}

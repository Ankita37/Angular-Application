import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /*template:`<async-pipe1></async-pipe1>`,*/
  template:`
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    
  `,
  /*<employee-list></employee-list>*/
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular';
}

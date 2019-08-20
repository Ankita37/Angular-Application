import {Component} from '@angular/core'

@Component({
  selector: 'async-pipe1',
  template: `
 <div>
  <h4>AsyncPipe without then</h4>
 
  <p>Output of a promise after 3 seconds is {{promise|async}}</p> 
 </div>
  `
})
export class AsyncPipe1Component {
  promise: Promise<any>;

  constructor() {
		this.promise = this.getPromise(); 
  }

  getPromise() {
     return new Promise((resolve, reject) => {
       setTimeout(() => resolve("Promise complete!"), 3000);
     });
  }
}
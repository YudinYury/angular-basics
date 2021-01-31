import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic title';
  rImg = 'https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png';
  // aImg = 'https://www.iconfinder.com/icons/4518980/angular_icon';
  inputValue = '';

  constructor() {
  }

  // tslint:disable-next-line:typedef
  onInput(event?: any) {
    console.debug('event =', event);
    this.inputValue = event?.target;
  }
}

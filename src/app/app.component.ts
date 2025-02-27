import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'I Love Angular from TS file !!!';

  skills : Array<string> = ["JS", "TS", "Angular", "Node"]
}

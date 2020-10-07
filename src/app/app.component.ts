import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>Foreground: <input [(ngModel)]="fg" /></p>
    <p>Foreground: <input [(ngModel)]="bg" /></p>
    <div [ngStyle]="{'color': fg, 'background-color': bg, 'padding':'5px'}">Test</div>
  `,
  styles: []
})
export class AppComponent {
  title = 'components-ex300';
  fg = "#ffffff";
  bg = "#000000";
}

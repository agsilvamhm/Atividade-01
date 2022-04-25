import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  pages: Array<{ title: string, url: string, icon: string }>;
  constructor(private menu: MenuController) {

    menu.enable(true);

    this.pages = [
      { title: 'Button', url: '../button', icon: 'alert-circle' },
      { title: 'Input', url: '../input', icon: 'brush' },
      { title: 'Badge', url: '../badge', icon: 'cloudy' }
    ];
  }
}

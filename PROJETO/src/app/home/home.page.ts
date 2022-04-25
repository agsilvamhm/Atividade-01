import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public toastController: ToastController) {}

  async presentToast(messagem: string) {
    const toast = await this.toastController.create({
      message: messagem,
      duration: 2000
    });
    toast.present();
  }
}

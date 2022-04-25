import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { __values } from 'tslib';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {
  e_mail: string = '';
  telefone: string = '';

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async apresentarAlert() {
    const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Entrada de dados',
    subHeader: '',
    message: '',
    inputs:[{name:'email',
             type:'email',
             placeholder:'E-mail:'},
             {name:'telefone',
             type:'tel',
             placeholder:'Telefone:'}
            ],
    buttons: [
    {
    text: 'Cancelar',
    role: 'cancel',
    cssClass: 'secondary',
    handler: () => {
    console.log('Confirm Cancel');
    }
    }    , {
    text: 'Enviar',
    role: 'ok',
    handler: data => {
      console.log('Confirm Ok');
      this.e_mail = data.email;
      this.telefone = data.telefone;
      }
      }]
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}

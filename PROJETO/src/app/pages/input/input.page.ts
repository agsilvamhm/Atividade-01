import { DadosService } from './../../dados/dados.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
   users: any;
   login: string;
   senha: string;
   mensagem: string;

  constructor(dados: DadosService) {
     this.users = dados.users;
   }

  ngOnInit() {
  }

  entrar(campoLogin, campoSenha){
    this.login = campoLogin;
    this.senha = campoSenha;

    if (this.login == this.users[0].login && this.senha == this.users[0].senha){
        this.mensagem = 'Seja bem vindo ' + this.login;
        window.open('../welcome', '_self');
    } else
    {
        this.mensagem = 'Não foi possível efetuar a sua autenticação!';
    }
  }
}

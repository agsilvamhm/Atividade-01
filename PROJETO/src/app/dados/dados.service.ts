import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  users: Array<{login: string, senha: string}>;

  constructor() {
      this.users = [{login: 'admin', senha: '123'}]
  }
}

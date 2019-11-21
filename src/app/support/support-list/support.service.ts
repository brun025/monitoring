import { Injectable } from '@angular/core';
import { SupportListComponent } from './support-list.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupportService {
  resposta: any
  private _supportListComponent: SupportListComponent;

  constructor(private httpClient: HttpClient) { }

  set supportListComponent(value: SupportListComponent){
    this._supportListComponent = value;
  }

  showModalInsert(){
    this._supportListComponent.supportNewModal.showModal();
  }

  showModalEdit(support){
    this._supportListComponent.supportEditModal._support = support;
    this._supportListComponent.supportEditModal.dados = support;
    this._supportListComponent.supportEditModal.showModal();
  }

  showModalDelete(id: number){
    this._supportListComponent.supportDeleteModal.support_id = id;
    this._supportListComponent.supportDeleteModal.showModal();
  }

  getSupports(){
    const req = this.httpClient.get('http://157.245.241.8:3000/supports/').toPromise();

    req.then((supports) => {
      this._supportListComponent.supports = supports
    })
  }

  post(support){
    const req = this.httpClient.post("http://157.245.241.8:3000/supports", support).toPromise();

    req.then((resposta) => {
      this.resposta = resposta
      this.getSupports();
      // console.log(this.resposta)
    }).catch((erro) => {
      console.log(erro)
    });
  }

  postUser(support){
    support.role = 'support'
    const req = this.httpClient.post("http://157.245.241.8:3000/users", support).toPromise();

    req.then((resposta) => {
      this.resposta = resposta
      support.user_id = this.resposta.insertId
      this.post(support)
    }).catch((erro) => {
      console.log(erro)
    });
  }

  destroy(id) {
    const req = this.httpClient.delete("http://157.245.241.8:3000/supports/" + id).toPromise();

    req.then((resposta) => {
      this.resposta = resposta;
      this.getSupports();
    }).catch((erro) => {
      this.resposta = erro;
    });
  }

  update(support, dados) {
    // console.log(dados)
    const req = this.httpClient.patch("http://157.245.241.8:3000/supports/" + support.id, dados).toPromise();

    req.then((resposta) => {
      this.resposta = resposta;
      this.getSupports();
    }).catch((erro) => {
      this.resposta = erro;
    });
  }

}


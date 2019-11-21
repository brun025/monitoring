import { Injectable } from '@angular/core';
import { TypeListComponent } from './type-list.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  resposta: any;

  private _typeListComponent: TypeListComponent;

  constructor(private httpClient: HttpClient) { }

  set typeListComponent(value: TypeListComponent){
    this._typeListComponent = value;
  }

  showModalInsert(){
    this._typeListComponent.typeNewModal.showModal();
  }

  showModalEdit(type){
    this._typeListComponent.typeEditModal._type = type;
    this._typeListComponent.typeEditModal.dados = type;
    this._typeListComponent.typeEditModal.showModal();
  }

  showModalDelete(id: number){
    this._typeListComponent.typeDeleteModal.type_id = id;
    this._typeListComponent.typeDeleteModal.showModal();
  }

  getTypes(){
    const req = this.httpClient.get('http://157.245.241.8:3000/types/').toPromise();

    req.then((types) => {
      this._typeListComponent.types = types
    })
  }

  post(type){
    const req = this.httpClient.post("http://157.245.241.8:3000/types", type).toPromise();

    req.then((resposta) => {
      this.resposta = resposta
      this.getTypes();
      // console.log(this.resposta)
    }).catch((erro) => {
      console.log(erro)
    });
  }

  destroy(id) {
    const req = this.httpClient.delete("http://157.245.241.8:3000/types/" + id).toPromise();

    req.then((resposta) => {
      this.resposta = resposta;
      this.getTypes();
    }).catch((erro) => {
      this.resposta = erro;
    });
  }

  update(type, dados) {
    console.log(type.id)
    const req = this.httpClient.patch("http://157.245.241.8:3000/types/" + type.id, dados).toPromise();

    req.then((resposta) => {
      this.resposta = resposta;
      this.getTypes();
    }).catch((erro) => {
      this.resposta = erro;
    });
  }

}



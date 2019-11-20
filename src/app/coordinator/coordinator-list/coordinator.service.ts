import { Injectable } from '@angular/core';
import { CoordinatorListComponent } from './coordinator-list.component';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CoordinatorService {

  // coordinators: any;
  resposta: any
  private _coordinatorListComponent: CoordinatorListComponent;

  constructor(private httpClient: HttpClient) { }

  set coordinatorListComponent(value: CoordinatorListComponent){
    this._coordinatorListComponent = value;
  }

  showModalInsert(){
    this._coordinatorListComponent.coordinatorNewModal.showModal();
  }

  showModalEdit(coordinator){
    this._coordinatorListComponent.coordinatorEditModal._coordinator = coordinator;
    this._coordinatorListComponent.coordinatorEditModal.dados = coordinator;
    this._coordinatorListComponent.coordinatorEditModal.showModal();
  }

  showModalDelete(id: number){
    this._coordinatorListComponent.coordinatorDeleteModal._coordinator_id = id;
    this._coordinatorListComponent.coordinatorDeleteModal.showModal();
  }

  getCoordinators(){
    const req = this.httpClient.get('http://127.0.0.1:3000/coordinators/').toPromise();

    req.then((coordinators) => {
      this._coordinatorListComponent.coordinators = coordinators
    })
  }

  post(coordinator){
    const req = this.httpClient.post("http://127.0.0.1:3000/coordinators", coordinator).toPromise();

    req.then((resposta) => {
      this.resposta = resposta
      this.getCoordinators();
      // console.log(this.resposta)
    }).catch((erro) => {
      console.log(erro)
    });
  }

  postUser(coordinator){
    coordinator.role = 'coordinator'
    const req = this.httpClient.post("http://127.0.0.1:3000/users", coordinator).toPromise();

    req.then((resposta) => {
      this.resposta = resposta
      coordinator.user_id = this.resposta.insertId
      this.post(coordinator)
    }).catch((erro) => {
      console.log(erro)
    });
  }

  destroy(id) {
    const req = this.httpClient.delete("http://127.0.0.1:3000/coordinators/" + id).toPromise();

    req.then((resposta) => {
      this.resposta = resposta;
      this.getCoordinators();
    }).catch((erro) => {
      this.resposta = erro;
    });
  }

  update(coordinator, dados) {
    // console.log(dados)
    const req = this.httpClient.patch("http://127.0.0.1:3000/coordinators/" + coordinator.id, dados).toPromise();

    req.then((resposta) => {
      this.resposta = resposta;
      this.getCoordinators();
    }).catch((erro) => {
      this.resposta = erro;
    });
  }

}

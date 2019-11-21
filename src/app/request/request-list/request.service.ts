import { Injectable } from '@angular/core';
import { RequestListComponent } from './request-list.component';
import { HttpClient } from '@angular/common/http';
import { NavbarService } from '../../navbar/navbar.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
    resposta: any;
    items: any;
  
    private _requestListComponent: RequestListComponent;
  
    constructor(private httpClient: HttpClient,
              protected navbarService: NavbarService) { }
  
    set requestListComponent(value: RequestListComponent){
      this._requestListComponent = value;
    }
  
    showModal(item){
      this._requestListComponent.requestShowModal.dados = item;
      this._requestListComponent.requestShowModal.showModal();
    }

    sendMail(item){
      item.message = 'Seu pedido de manutenção foi concluído com sucesso! Agradecemos seu contato!'
      item.subject = 'Pedido concluído'
      const req = this.httpClient.post('http://157.245.241.8:3000/sendMail/', item).toPromise();
  
      req.then((resposta) => {
        console.log(resposta)
      }).catch((erro) => {
        console.log(erro)
      });
    }
  
    getItems(){
      const req = this.httpClient.get('http://157.245.241.8:3000/request-items/').toPromise();
  
      req.then((items) => {
        this._requestListComponent.items = items
      })
    }
  
    update(item, dados) {
      // item.amount = dados.amount;
      dados.date = item.date.split('T')[0];
      dados.finalDate = this.obterDataAtual();

      if(item.status == 'Concluído' || item.status == 'Cancelado'){
        dados.user_id = this.navbarService._navbarComponent.userId;
      }
      else{
        dados.user_id = item.user_id;
      }
      // console.log(dados)
      const req = this.httpClient.patch("http://157.245.241.8:3000/items/" + item.id, dados).toPromise();
  
      req.then((resposta) => {
        // console.log(resposta)
        this.resposta = resposta;
        this.getItems();

        if(item.status == 'Concluído'){
          this.sendMail(item);
        }
      }).catch((erro) => {
        this.resposta = erro;
      });
    }

    changeStatus(item, status){
      item.status = status;
      this.update(item,item)
    }
  
    obterDataAtual() {
        const date = new Date();
    
        const ano = date.getFullYear();
        const mes = date.getMonth();
        const dia = date.getDate();

        const h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();
    
        let mesValor = '';
        let diaValor = '';
    
        mesValor = ((mes < 10) ? '0' : '').concat(mes.toString())
        diaValor = ((dia < 10) ? '0' : '').concat(dia.toString())
    
        return ano.toString().concat('-').concat(mesValor).concat('-').concat(diaValor).concat(' ').concat(h.toString()).concat(':').concat(m.toString()).concat(':').concat(s.toString());
    }
  }
  
  



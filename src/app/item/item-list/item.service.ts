import { Injectable } from '@angular/core';
import { ItemListComponent } from './item-list.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
    resposta: any;
    items: any;
  
    private _itemListComponent: ItemListComponent;
  
    constructor(private httpClient: HttpClient) { }
  
    set itemListComponent(value: ItemListComponent){
      this._itemListComponent = value;
    }
  
    showModalInsert(types){
      this._itemListComponent.itemNewModal.showModal(types);
    }
  
    showModalEdit(item, types){
      item.date = item.date.split('T')[0];

      if(item.finalDate != null){
        item.finalDate = item.finalDate.split('T')[0];
      }
      
      this._itemListComponent.itemEditModal._item = item;
      this._itemListComponent.itemEditModal.dados = item;
      this._itemListComponent.itemEditModal.showModal(types);
    }
  
    showModalDelete(id: number){
      this._itemListComponent.itemDeleteModal.item_id = id;
      this._itemListComponent.itemDeleteModal.showModal();
    }

    getTypes(){
      const req = this.httpClient.get('http://157.245.241.8:3000/types/').toPromise();
  
      req.then((types) => {
        this._itemListComponent.types = types;
      })
    }
  
    getItems(){
      const req = this.httpClient.get('http://157.245.241.8:3000/items/').toPromise();
  
      req.then((items) => {
        // console.log(items)
        this._itemListComponent.items = items
      })
    }
  
    post(item){
      // console.log(item)
      item.status = 'Aguardando';
      item.amount = 1;
      item.date = this.obterDataAtual();

      const req = this.httpClient.post("http://157.245.241.8:3000/items", item).toPromise();
  
      req.then((resposta) => {
        // console.log(resposta)
        this.resposta = resposta
        this.getItems();
      }).catch((erro) => {
        console.log(erro)
      });
    }
  
    destroy(id) {
      const req = this.httpClient.delete("http://157.245.241.8:3000/items/" + id).toPromise();
  
      req.then((resposta) => {
        this.resposta = resposta;
        this.getItems();
      }).catch((erro) => {
        this.resposta = erro;
      });
    }
  
    update(item, dados) {
      // item.amount = dados.amount;
      // item.date = dados.date;
      if(dados.finalDate == null){
        dados.finalDate = this.obterDataAtual()
      }

      dados.user_id = item.user_id;
      // console.log(dados)
      const req = this.httpClient.patch("http://157.245.241.8:3000/items/" + item.id, dados).toPromise();
  
      req.then((resposta) => {
        console.log(resposta)
        this.resposta = resposta;
        this.getItems();
      }).catch((erro) => {
        this.resposta = erro;
      });
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
  
  


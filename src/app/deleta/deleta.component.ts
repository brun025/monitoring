import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deleta',
  templateUrl: './deleta.component.html',
  styleUrls: ['./deleta.component.css']
})
export class DeletaComponent implements OnInit {
  cliente: any;
  resposta: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.cliente = {};
    this.resposta = {};
  }

  deleta() {
    const req = this.httpClient.delete("http://127.0.0.1:3000/delete/clientes/" + this.cliente.id).toPromise();

    req.then((resposta) => {
      this.resposta = resposta;
    }).catch((erro) => {
      this.resposta = erro;
    });

  }

}

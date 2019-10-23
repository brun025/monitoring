import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  clientes: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.clientes = [];
    const req = this.httpClient.get('http://127.0.0.1:3000/clientes/').toPromise();

    req.then((clientes) => {
      this.clientes = clientes;
    })

  }

}

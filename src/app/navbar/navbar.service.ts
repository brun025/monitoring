import { Injectable } from '@angular/core';
import { NavbarComponent } from './navbar.component';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  public _navbarComponent: NavbarComponent;

  constructor() { }

  set navbarComponent(value: NavbarComponent){
    this._navbarComponent = value;
  }

  permission(role){
    this._navbarComponent.role = role;
  }

}

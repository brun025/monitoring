import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  role: any;
  userName = 'teste';
  userId: number;

  constructor( protected navbarService: NavbarService) {
      this.navbarService.navbarComponent = this;
  }

  ngOnInit() {
    this.role = false;
  }

}

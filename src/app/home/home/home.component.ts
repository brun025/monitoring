import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { NavbarService } from '../../navbar/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;

  constructor(protected homeService: HomeService,
            protected navbarService: NavbarService) { }

  ngOnInit() {
    this.user = {};
    this.navbarService._navbarComponent.role = '';
  }

  submit(){
    this.homeService.login(this.user)
  }

  formReclame(){
    this.homeService.form()
  }

}

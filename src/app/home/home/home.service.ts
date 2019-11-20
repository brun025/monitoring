import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import {NavbarService} from '../../navbar/navbar.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  user: any;

  constructor(private httpClient: HttpClient,
              private router: Router,
              protected navbarService: NavbarService) { }

  login(user){
    const req = this.httpClient.post("http://127.0.0.1:3000/login/", user).toPromise();

    req.then((user) => {
      this.user = user;
      // console.log(this.user);

      if(this.user[0].role == 'admin'){
        this.navbarService._navbarComponent.role = 'admin';
        this.navbarService._navbarComponent.userName = this.user[0].name;
        this.navbarService._navbarComponent.userId = this.user[0].id;
        this.router.navigateByUrl('/user/list');
      }
      else{
        if(this.user[0].role == 'support'){
          this.navbarService._navbarComponent.role = 'support';
          this.navbarService._navbarComponent.userName = this.user[0].name;
          this.navbarService._navbarComponent.userId = this.user[0].id;
          this.router.navigateByUrl('/request/list');
        }
        else{
          if(this.user[0].role == 'coordinator'){
            this.navbarService._navbarComponent.role = 'coordinator';
            this.navbarService._navbarComponent.userName = this.user[0].name;
            this.navbarService._navbarComponent.userId = this.user[0].id;
            this.router.navigateByUrl('/request/list');
          }
        }
      }

    }).catch((erro) => {
      console.log(erro)
      // this.user = erro;
    });
  }

  form(){
    this.router.navigateByUrl('/form/list');
  }

}

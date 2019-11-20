import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalComponent } from './modal/modal.component';
import { HomeComponent } from './home/home/home.component';
import { CoordinatorListComponent } from './coordinator/coordinator-list/coordinator-list.component';
import { CoordinatorNewModalComponent } from './coordinator/coordinator-new-modal/coordinator-new-modal.component';
import { CoordinatorEditModalComponent } from './coordinator/coordinator-edit-modal/coordinator-edit-modal.component';
import { CoordinatorDeleteModalComponent } from './coordinator/coordinator-delete-modal/coordinator-delete-modal.component';
import { SupportListComponent } from './support/support-list/support-list.component';
import { SupportNewModalComponent } from './support/support-new-modal/support-new-modal.component';
import { SupportEditModalComponent } from './support/support-edit-modal/support-edit-modal.component';
import { SupportDeleteModalComponent } from './support/support-delete-modal/support-delete-modal.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserNewModalComponent } from './user/user-new-modal/user-new-modal.component';
import { UserEditModalComponent } from './user/user-edit-modal/user-edit-modal.component';
import { UserDeleteModalComponent } from './user/user-delete-modal/user-delete-modal.component';
import { TypeListComponent } from './type/type-list/type-list.component';
import { TypeNewModalComponent } from './type/type-new-modal/type-new-modal.component';
import { TypeEditModalComponent } from './type/type-edit-modal/type-edit-modal.component';
import { TypeDeleteModalComponent } from './type/type-delete-modal/type-delete-modal.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemNewModalComponent } from './item/item-new-modal/item-new-modal.component';
import { ItemEditModalComponent } from './item/item-edit-modal/item-edit-modal.component';
import { ItemDeleteModalComponent } from './item/item-delete-modal/item-delete-modal.component';
import { FormComponent } from './form/form/form.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestShowModalComponent } from './request/request-show-modal/request-show-modal.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PizzaGraphComponent } from './dashboard/pizza-graph/pizza-graph.component';
import { LineGraphComponent } from './dashboard/line-graph/line-graph.component';
import { TableComponent } from './dashboard/table/table.component';
import { FilterPipe } from './filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'coordinator/list', component: CoordinatorListComponent },
  { path: 'support/list', component: SupportListComponent },
  { path: 'user/list', component: UserListComponent },
  { path: 'type/list', component: TypeListComponent },
  { path: 'item/list', component: ItemListComponent },
  { path: 'form/list', component: FormComponent },
  { path: 'request/list', component: RequestListComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    NavbarComponent,
    ModalComponent,
    HomeComponent,
    CoordinatorListComponent,
    CoordinatorNewModalComponent,
    CoordinatorEditModalComponent,
    CoordinatorDeleteModalComponent,
    SupportListComponent,
    SupportNewModalComponent,
    SupportEditModalComponent,
    SupportDeleteModalComponent,
    UserListComponent,
    UserNewModalComponent,
    UserEditModalComponent,
    UserDeleteModalComponent,
    TypeListComponent,
    TypeNewModalComponent,
    TypeEditModalComponent,
    TypeDeleteModalComponent,
    ItemListComponent,
    ItemNewModalComponent,
    ItemEditModalComponent,
    ItemDeleteModalComponent,
    FormComponent,
    RequestListComponent,
    RequestShowModalComponent,
    DashboardComponent,
    PizzaGraphComponent,
    LineGraphComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

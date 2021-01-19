import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoComponentDefinedComponent } from './core/no-component-defined/no-component-defined.component';
import { ActorCreateComponent } from './feature/actor/actor-create/actor-create.component';
import { ActorDetailComponent } from './feature/actor/actor-detail/actor-detail.component';
import { ActorEditComponent } from './feature/actor/actor-edit/actor-edit.component';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';
import { CreditCreateComponent } from './feature/credit/credit-create/credit-create.component';
import { CreditDetailComponent } from './feature/credit/credit-detail/credit-detail.component';
import { CreditEditComponent } from './feature/credit/credit-edit/credit-edit.component';
import { CreditListComponent } from './feature/credit/credit-list/credit-list.component';
import { MovieCreateComponent } from './feature/movie/movie-create/movie-create.component';
import { MovieDetailComponent } from './feature/movie/movie-detail/movie-detail.component';
import { MovieEditComponent } from './feature/movie/movie-edit/movie-edit.component';
import { MovieListComponent } from './feature/movie/movie-list/movie-list.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';


const routes: Routes = [
  { path: '', redirectTo: 'movie-list', pathMatch: 'full' },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'movie-create', component: MovieCreateComponent },
  { path: 'movie-detail/:id', component: MovieDetailComponent },
  { path: 'movie-edit/:id', component: MovieEditComponent },
  { path: 'actor-list', component: ActorListComponent },
  { path: 'actor-create', component: ActorCreateComponent },
  { path: 'actor-detail/:id', component: ActorDetailComponent },
  { path: 'actor-edit/:id', component: ActorEditComponent },
  { path: 'credit-list', component: CreditListComponent },
  { path: 'credit-create', component: CreditCreateComponent },
  { path: 'credit-detail/:id', component: CreditDetailComponent },
  { path: 'credit-edit/:id', component: CreditEditComponent },
  { path: 'user-list', component: UserListComponent},
  { path: 'user-create', component:UserCreateComponent},
  { path: 'user-detail/:id', component:UserDetailComponent},
  { path: 'user-edit/:id', component:UserEditComponent},
  { path: 'user-login', component:UserLoginComponent},  
  { path: '**', component: NoComponentDefinedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

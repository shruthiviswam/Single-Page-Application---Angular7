import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';


const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'users', component : UsersComponent},
  {path : 'servers', component : ServersComponent},
  {path : 'users/:id/:name', component : UserComponent},
  {path : 'servers/:id/:edit', component : EditServerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

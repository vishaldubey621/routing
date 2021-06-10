import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ContactmeComponent } from './contact/contactme/contactme.component';
import { ContactteamComponent } from './contact/contactteam/contactteam.component';
import { TestguardGuard } from './testguard.guard';

const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent
  },

  {
    path : 'about',
    component : AboutComponent,
    canActivate : [TestguardGuard]
  },

  {
    path : 'contact',
      children : [
      { path : '', component : ContactComponent },
      { path : 'contactme', component : ContactmeComponent },
      { path : 'contactteam', component : ContactteamComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = 
[
  
  ContactmeComponent,
  ContactteamComponent
]

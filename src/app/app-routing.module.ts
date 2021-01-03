import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
 import { ErrorComponent } from './components/error/error.component';
 import { CartaComponent } from './components/carta/carta.component';
 import { ReservesComponent } from './components/reserves/reserves.component';
 import { ContacteComponent } from './components/contacte/contacte.component';
import { PoliticaCookiesComponent } from './components/politica-cookies/politica-cookies.component';
import { PoliticaPrivacidadComponent } from './components/politica-privacidad/politica-privacidad.component';
import { AvisoLegalComponent } from './components/aviso-legal/aviso-legal.component';
// import { EventosComponent } from './components/eventos/eventos.component';
// import { ReservesComponent } from './components/reserves/reserves.component';
// import { ContacteComponent } from './components/contacte/contacte.component';

//ASIGNAMOS EL ROUTING
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' }, //pagina principal
  { path: 'home', component: HomeComponent }, //pagina home
  // { path: 'eventos', component: EventosComponent }, //eventos
  { path: 'carta', component: CartaComponent }, //carta
  { path: 'contacte', component: ContacteComponent }, //carta
  { path: 'reserves', component: ReservesComponent }, //carta
  { path: 'politica-cookies', component: PoliticaCookiesComponent }, //carta
  { path: 'politica-privacidad', component: PoliticaPrivacidadComponent }, //carta
  { path: 'aviso-legal', component: AvisoLegalComponent }, //carta

  // { path: 'reserves', component: ReservesComponent }, //reserves
  // { path: 'contacte', component: ContacteComponent }, //reserves
  // { path: 'error', component: ErrorComponent }, //pagina error
  { path: '**' , redirectTo: '/error'} //pagina que no se encuentra, redirecciona a error
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

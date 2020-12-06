import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { EntornComponent } from './components/entorn/entorn.component';
import { ProgramacioComponent } from './components/programacio/programacio.component';
import { CartaComponent } from './components/carta/carta.component';
import { ReservesComponent } from './components/reserves/reserves.component';
import { ContacteComponent } from './components/contacte/contacte.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ErrorComponent,
    SobreComponent,
    EntornComponent,
    ProgramacioComponent,
    CartaComponent,
    ReservesComponent,
    ContacteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

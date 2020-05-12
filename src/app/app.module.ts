import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KarnatakaComponent } from './karnataka/karnataka.component';
import { AndhraComponent } from './andhra/andhra.component';
import { KeralaComponent } from './kerala/kerala.component';
import { GujaratComponent } from './gujarat/gujarat.component';
import { RajastanComponent } from './rajastan/rajastan.component';
import { PunjabComponent } from './punjab/punjab.component';
import { DelhiComponent } from './delhi/delhi.component';
import { StatesComponent } from './states/states.component';

@NgModule({
  declarations: [
    AppComponent,
    KarnatakaComponent,
    AndhraComponent,
    KeralaComponent,
    GujaratComponent,
    RajastanComponent,
    PunjabComponent,
    DelhiComponent,
    StatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

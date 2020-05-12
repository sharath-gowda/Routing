import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KarnatakaComponent } from './karnataka/karnataka.component';
import { AndhraComponent } from './andhra/andhra.component';
import { KeralaComponent } from './kerala/kerala.component';
import { GujaratComponent } from './gujarat/gujarat.component';
import { DelhiComponent } from './delhi/delhi.component';
import { RajastanComponent } from './rajastan/rajastan.component';
import { PunjabComponent } from './punjab/punjab.component';
import { StatesComponent } from './states/states.component';


const routes: Routes = [
  
  {
    path:'',redirectTo:'states',pathMatch:'full'
  },
  {
path:'states',component:StatesComponent,children:[
  
]
  },
  {
    path:'karnataka',component:KarnatakaComponent
  },
  {
    path:'andhra',component:AndhraComponent
  },
  {
    path:'kerala',component:KeralaComponent
  },
  {
    path:'gujarat',component:GujaratComponent
  },
  {path:'delhi',component:DelhiComponent},
  {path:'rajasthan',component:RajastanComponent},
  {path:'punjab',component:PunjabComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

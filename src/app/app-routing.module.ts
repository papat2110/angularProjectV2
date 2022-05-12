import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './collection/navbar/navbar.component';
import { HeaderComponent } from './collection/header/header.component';
import { PlusComponent } from './calculate/plus/plus.component';
import { MinusComponent } from './calculate/minus/minus.component';
import { MultiplyComponent } from './calculate/multiply/multiply.component';
import { DevideComponent } from './calculate/devide/devide.component';
import { CalFormComponent } from './collection/cal-form/cal-form.component';

const routes: Routes = [
  {path:'plus',component:PlusComponent},
  {path:'minus',component:MinusComponent},
  {path:'multiply',component:MultiplyComponent},
  {path:'devide',component:DevideComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

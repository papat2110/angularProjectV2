import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './collection/navbar/navbar.component';
import { HeaderComponent } from './collection/header/header.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculateService } from './services/calculate.service';
import { PlusComponent } from './calculate/plus/plus.component';
import { MinusComponent } from './calculate/minus/minus.component';
import { MultiplyComponent } from './calculate/multiply/multiply.component';
import { DevideComponent } from './calculate/devide/devide.component';
import { HighlightDirective } from './directive/highlight.directive';
import { UpperCaseDirective } from './directive/upper-case.directive';
import { CalFormComponent } from './collection/cal-form/cal-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    PlusComponent,
    MinusComponent,
    MultiplyComponent,
    DevideComponent,
    HighlightDirective,
    UpperCaseDirective,
    CalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

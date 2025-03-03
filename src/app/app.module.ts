import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
// import { productComponent } from './shared/components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

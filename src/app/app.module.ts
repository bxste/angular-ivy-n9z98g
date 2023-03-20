import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProductComponent } from './product/product.component';
import { EmployeesService } from './employees.service';
import { ProductService } from './product.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    EmployeesComponent,
    ProductComponent,
  ],
  providers: [EmployeesService, ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}

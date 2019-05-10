import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomersListComponent } from './customers-list/customers-list.component';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule, MatButtonModule, MatFormFieldModule } from '@angular/material';

import { HelperFunc } from './HelperFunc';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [HelperFunc],
  bootstrap: [AppComponent]
})
export class AppModule { }

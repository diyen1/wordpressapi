import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CrudCreateComponent} from './create/crud-create.component';
import {MdlModule} from '@angular-mdl/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

const components = [
  CrudCreateComponent,
];

@NgModule({
  declarations: [
    ... components,
  ],
  imports: [
    BrowserModule,
    MdlModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    ... components,
  ],
  bootstrap: []
})
export class DmfbCrudModule { }

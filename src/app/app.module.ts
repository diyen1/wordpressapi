import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DmfbCrudModule} from './modules/crud/dmfb-crud.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MdlModule} from '@angular-mdl/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DmfbCrudModule,
    BrowserModule,
    MdlModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // UtilsModule,
    // RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

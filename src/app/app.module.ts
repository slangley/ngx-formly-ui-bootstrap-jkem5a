import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';

import { AppComponent } from './app.component';
import {FormlyFieldInput} from './custom.fieldtype';

@NgModule({
  imports: [ 
    BrowserModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'input', component: FormlyFieldInput },
      ]
    }),
    FormlyBootstrapModule,
  ],
  declarations: [ AppComponent, FormlyFieldInput ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

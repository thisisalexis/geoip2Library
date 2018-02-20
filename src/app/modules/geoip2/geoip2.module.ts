import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Geoip2Service} from './services/geoip2/geoip2.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [

  ],
  exports: [

  ],
  providers: [
    Geoip2Service
  ]
})
export class Geoip2Module { }

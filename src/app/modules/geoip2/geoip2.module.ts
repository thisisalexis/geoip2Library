import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import {LocalStorageModule} from 'angular-2-local-storage';
import {Geoip2Service} from './services/geoip2/geoip2.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    LocalStorageModule.withConfig({
      prefix: 'geoip2',
      storageType: 'localStorage'
    }),
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

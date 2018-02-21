import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Geoip2Service} from './services/geoip2/geoip2.service';
import {LocalStorageModule} from 'angular-2-local-storage';

@NgModule({
  imports: [
    CommonModule,
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

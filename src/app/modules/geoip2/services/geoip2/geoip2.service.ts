import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http, Response} from '@angular/http';
import {isNullOrUndefined} from 'util';
import {environment} from '../../../../../environments/environment';
import {LocalStorageService} from 'angular-2-local-storage';

@Injectable()
export class Geoip2Service {

  private readonly GEO_IP_2_URL = environment.geoIpServiceUrl;
  private readonly GEO_IP_LOCAL_STORAGE_KEY = 'geoIp';
  private _geoIp: string;

  constructor( @Inject( Http ) private http: Http, @Inject( LocalStorageService ) private localStorageService: LocalStorageService ) {
    this.geoIp = null;
  }

  get geoIp() {
    return this._geoIp || this.getStoregedGeoIp();
  }

  set geoIp( geoIp: string ) {
    this._geoIp = geoIp;
    this.setStoregedGeoIp( this.geoIp );
  }

  public getGeoIp(): Observable<string> {
    try {
      const storagedGeoIp: string =  this.geoIp;
      if ( isNullOrUndefined( storagedGeoIp ) || storagedGeoIp === '' ) {
        const geoIpResponse: Observable<string> = this.requestGeoIpString();
        geoIpResponse.subscribe( ( geoIp: string ) => {
          this.geoIp = geoIp;
        } );
        return geoIpResponse;
      } else {
        this.geoIp = storagedGeoIp;
        return Observable.of( this.geoIp );
      }
    } catch ( error ) {
      console.log( 'Geoip2Service.getGeoIp()' );
      console.error( error );
      throw error;
    }
  }

  private requestGeoIpString(): Observable<string> {
    try {
      return this.requestGeoIpObject().map( ( response: any ) => {
        return response.traits.ip_address as string;
      } ).catch( ( error ) => {
        return this.requestGeoIpHandleError( error );
      } );
    } catch ( error ) {
      return this.requestGeoIpHandleError( error );
    }
  }

  private requestGeoIpObject(): Observable<any> {
    try {
      return this.http.get( this.GEO_IP_2_URL  ).map( ( response: Response ) => {
        return response.json();
      } ).catch( ( error ) => {
          return this.requestGeoIpHandleError( error );
      } );
    } catch ( error ) {
      return this.requestGeoIpHandleError( error );
    }
  }

  private requestGeoIpHandleError( error ): Observable<any> {
    console.error ( error );
    return Observable.throw( error );
  }

  private getStoregedGeoIp(): string {
    try {
      return  this.localStorageService.get<string>( this.GEO_IP_LOCAL_STORAGE_KEY );
    } catch ( error ) {
      console.log('Geoip2Service.getStoragedGeoIp()');
      console.error ( error );
      return null;
    }
  }

  private setStoregedGeoIp( geoIp: string): void {
    try {
      this.localStorageService.set( this.GEO_IP_LOCAL_STORAGE_KEY, geoIp );
    } catch ( error ) {
      console.log('Geoip2Service.setStoregedGeoIp()');
      console.error ( error );
    }
  }

}

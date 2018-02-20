# geoip2Library
An Angular 2-4 library that get IP, city, country and other user information from GeoIP Maxmind API

Pack it for local development
Let?s get a tarball setup that we can npm install from Angular applications within our local dev environments. cd into the dist folder and run npm pack. This will create a file in the root of the dist folder called my-component-library-0.0.0.tgz. The 0.0.0 part comes from the top of your package.json. You?ll want to keep bumping that up as you start to truly deploy your component library for consumption.

From other Angular applications on your system that require your component library, you can npm install ../some-relative-path/dist/my-component-library-0.0.0.tgz to install your component library into your application.

Publish it on npm
Once you login to your npm account with npm login you can publish your component library with npm publish dist. Just be sure that you have a unique package name (hint: my-component-library may be taken). Once published, you?ll be able to install your component library from npm with npm install my-component-library.

Consuming your component library
Once installed, you can import your header component into any application?s app.module.ts, by including it in its @NgModule imports array?

import { HeaderModule } from 'my-package-name';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
And using its selector in a template as you would a component that is part of your application.

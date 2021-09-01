import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { DropdownDirective } from './dropdown.directive';
import { DoublebedComponent } from './products/doublebed/doublebed.component';
import { SinglebedComponent } from './products/singlebed/singlebed.component';
import { FourposterbedComponent } from './products/fourposterbed/fourposterbed.component'
import { ProcartService } from './procart.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { AddressComponent } from './checkout/address/address.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {LoaderService} from './loading/loader.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import{InterceptorNetworksInterceptor} from './loading/interceptor-networks.interceptor'







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    FooterComponent,
    DropdownDirective,
    DoublebedComponent,
    SinglebedComponent,
    FourposterbedComponent,
    CheckoutComponent,
    AddressComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    MatProgressSpinnerModule
    
  ],
  providers: [
    ProcartService,
    LoaderService,
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorNetworksInterceptor,multi:true}
  ],
  bootstrap: [AppComponent],
  entryComponents:[CheckoutComponent]
})
export class AppModule { }

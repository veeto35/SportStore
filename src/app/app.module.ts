import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './store/checkout.component';
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { StoreFirstGuard } from './storeFirst.guard';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, StoreModule,FormsModule, RouterModule.forRoot([
       { path: 'store', component: StoreComponent,
      canActivate: [StoreFirstGuard]},
       { path: 'cart', component: CartDetailComponent,
       canActivate: [StoreFirstGuard]},
       { path: 'checkout', component: CheckoutComponent,
       canActivate: [StoreFirstGuard]},
       {path: 'admin', loadChildren: () => import("./admin/admin.module").then( m => m.AdminModule), canActivate: [StoreFirstGuard]},
       { path: '**', redirectTo: "/store"}
    ])
  ],
  providers: [ StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

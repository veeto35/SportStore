import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "../model/cartSummary.component";
import { CartDetailComponent } from "./cartDetail.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [ModelModule, FormsModule, BrowserModule, RouterModule ],
    declarations: [ StoreComponent, CounterDirective,CartSummaryComponent,CartDetailComponent],
    exports: [ StoreComponent,CartDetailComponent,CartSummaryComponent] 
})
export class StoreModule { }
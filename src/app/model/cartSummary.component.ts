import { Component } from "@angular/core";
import { Cart } from "./cart.model";
@Component({
    selector: "cart-summary",
    templateUrl: "cart-summary.component.html"
})

export class CartSummaryComponent {
    constructor(public cart:Cart){}
}
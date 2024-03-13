import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { FormsModule } from "@angular/forms";

@Component({

    templateUrl: "cartDetail.component.html",
    
})

export class CartDetailComponent {
    constructor(public cart: Cart) {}
}
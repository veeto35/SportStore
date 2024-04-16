import { RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AuthComponent } from "./auth.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthGuard } from "./auth.guard";
import { MaterialFeatures } from "./material.module";
import { ProductTableComponent } from "./productTable.component";
import { OrderTableComponent } from "./orderTable.component";
import { ProductEditorComponent } from "./productEditor.component";



let routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    {
        path: "main", component: AdminComponent, canActivate: [AuthGuard],
        children: [
            { path: "products/:mode/:id", component: ProductEditorComponent},
            { path: "products/:mode", component: ProductEditorComponent},
            { path: "products", component: ProductTableComponent},
            { path: "orders", component: OrderTableComponent},
            { path: "**", redirectTo: "products"}
        ]
    },
    { path: "**", redirectTo: "auth"}

]);

@NgModule({
    imports: [CommonModule,FormsModule, routing, MaterialFeatures],
    declarations: [AuthComponent,AdminComponent, ProductEditorComponent, ProductTableComponent, OrderTableComponent],
    providers: [AuthGuard]
})
export class AdminModule { }
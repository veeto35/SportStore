import { Injectable } from "@angular/core";
import { Product} from "./product.model";
import { Observable, from } from "rxjs";
import { Order } from "./order.model";

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1,"produto 1","Categoria 1", "Produto 1(Categoria 1)",100),
        new Product(1,"produto 2","Categoria 1", "Produto 2(Categoria 1)",100),
        new Product(2,"produto 3","Categoria 1", "Produto 3(Categoria 1)",100),
        new Product(3,"produto 4","Categoria 1", "Produto 4(Categoria 1)",100),
        new Product(4,"produto 5","Categoria 1", "Produto 5(Categoria 1)",100),
        new Product(5,"produto 6","Categoria 2", "Produto 6(Categoria 2)",100),
        new Product(6,"produto 7","Categoria 2", "Produto 7(Categoria 2)",100),
        new Product(7,"produto 8","Categoria 2", "Produto 8(Categoria 2)",100),
        new Product(8,"produto 9","Categoria 2", "Produto 9(Categoria 2)",100),
        new Product(9,"produto 10","Categoria 2", "Produto 10(Categoria 2)",100),
        new Product(10,"produto 11","Categoria 3", "Produto 11(Categoria 3)",100),
        new Product(11,"produto 12","Categoria 3", "Produto 12(Categoria 3)",100),
        new Product(12,"produto 13","Categoria 3", "Produto 13(Categoria 3)",100),
        new Product(13,"produto 14","Categoria 3", "Produto 14(Categoria 3)",100),
        new Product(14,"produto 15","Categoria 3", "Produto 15(Categoria 3)",100)
    ];

    getProducts() : Observable<Product[]> {
        return from([this.products]);
    }

    saveOrder(order: Order) : Observable<Order> {
        console.log(JSON.stringify(order));
        return from([order]);                                                                                                                                                              
    }
}
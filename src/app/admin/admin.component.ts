import { Component, Type } from "@angular/core";

@Component({
    templateUrl: 'admin.component.html'
})

export class AdminComponent {
    static canActivate: Type<any> | undefined;
}

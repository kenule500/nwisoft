import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { NavbarComponent } from "./navbar.component";
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    declarations: [NavbarComponent],
    imports: [
        CommonModule, IonicModule, RouterModule, FlexLayoutModule
    ],
    exports: [
        NavbarComponent
    ]
})
export class NavbarModule {}
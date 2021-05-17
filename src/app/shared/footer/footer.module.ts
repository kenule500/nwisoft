import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer.component';

@NgModule({
    declarations: [FooterComponent],
    imports: [
        CommonModule, IonicModule, RouterModule, FlexLayoutModule
    ],
    exports: [FooterComponent]
})
export class FooterModule {}
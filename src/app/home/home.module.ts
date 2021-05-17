import { FooterModule } from './../shared/footer/footer.module';
import { NavbarModule } from './../shared/navbar/navbar.module';
import { FooterComponent } from './../shared/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HomePageRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: HomePage }]),
    HomePageRoutingModule,
    NavbarModule,
    FooterModule
    
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

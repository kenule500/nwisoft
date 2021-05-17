import { FooterModule } from './../shared/footer/footer.module';
import { NavbarModule } from './../shared/navbar/navbar.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectsPage } from './projects.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProjectsPageRoutingModule } from './projects-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ProjectsPageRoutingModule,
    FlexLayoutModule,
    NavbarModule,
    FooterModule
  ],
  declarations: [ProjectsPage, ]
})
export class ProjectsPageModule {}

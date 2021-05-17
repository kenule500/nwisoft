import { Subscription } from 'rxjs';
import { ProjectService } from './project.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: 'projects.page.html',
  styleUrls: ['projects.page.scss']
})
export class ProjectsPage implements OnInit, OnDestroy  {
  projects: Project[];
  relevantProj: Project[];
  private projectSub: Subscription;
  
  constructor(private projectService: ProjectService) {}


  ngOnInit() {
    this.projectSub =  this.projectService.projects.subscribe( data => {
      this.projects = data;
      this.relevantProj = this.projects
    })
  }

  onFilterUpdate(e: CustomEvent<SegmentChangeEventDetail>) {
    if (e.detail.value !== 'all') {
      this.relevantProj = this.projects.filter(
        p => p.type === e.detail.value
      )
    } else this.relevantProj = this.projects
  }

  ngOnDestroy() {
    if (this.projectSub) {
      this.projectSub.unsubscribe();
    }
  }
}


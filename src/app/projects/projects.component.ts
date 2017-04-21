import { Component, HostBinding, OnInit } from '@angular/core';
import { Project } from './project.model';
import { ProjectsService } from './projects.service';
import { AnimationEvent } from '@angular/animations';
import { 
  markedTrigger,
  itemStateTrigger,
  slideStateTrigger
} from './projects.animations';

import { routerSlideStateTrigger } from '../shared/router-animations'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    markedTrigger,
    itemStateTrigger,
    slideStateTrigger,
    routerSlideStateTrigger
  ]
})
export class ProjectsComponent implements OnInit {
  @HostBinding('@routerSlideState') routeAnimation = true;
  
  projects: Project[];
  displayedProjects: Project[] = [];
  markedPrjIndex = 0;
  progress = 'progressing';
  createNew = false;
  clickInfo = 'default';

  constructor(private prjService: ProjectsService) { }

  ngOnInit() {
    this.prjService.loadProjects()
      .subscribe(
      (prj: Project[]) => {
        this.progress = 'finished';
        this.projects = prj;
        if (this.projects.length >= 1) {
          this.displayedProjects.push(this.projects[0]);  
        }
      }
      );
  }

  onStatusUpdated(newStatus: string, id: number) {
    this.projects[id].status = newStatus;
  }

  onProjectDeleted(index: number) {
    // this.projects.splice(index, 1); removes last elm of array
    this.projects.shift(); // removes first elm of array
  }

  onProjectCreated(project: Project) {
    this.createNew = false;
    // this.projects.push(project);
    setTimeout(() => {
      this.projects.unshift(project); // adds new element at start of array.
    }, 300);
  }

  onItemAnimated(animationEvent: AnimationEvent, lastPrjIndex: number) {
    if (animationEvent.fromState != 'void') {
      return;
    }
    if (this.projects.length > lastPrjIndex + 1) {
      this.displayedProjects.push(this.projects[lastPrjIndex + 1]);
    } else {
      this.projects = this.displayedProjects;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import { ProjectsService } from './projects.service';
import { 
  markedTrigger,
  itemStateTrigger  
} from './projects.animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    markedTrigger,
    itemStateTrigger
  ]
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
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
    this.projects.unshift(project); // adds new element at start of array.
  }
}

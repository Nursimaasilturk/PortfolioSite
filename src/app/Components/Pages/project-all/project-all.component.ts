import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/project.service';
import { Project } from 'src/app/portfolio';

@Component({
  selector: 'app-project-all',
  templateUrl: './project-all.component.html',
  styleUrls: ['./project-all.component.scss'],
})
export class ProjectAllComponent implements OnInit {
  allProjects: Project[] = [];
  filteredProjects: Project[] = [];
  constructor(private service: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.allProjects = this.service.getAllProjects();
    this.filteredProjects = this.allProjects;
  }
  getProjectsByFilter(filter: any) {
    if (filter == 'all') this.filteredProjects = this.allProjects;
    else
      this.filteredProjects = this.allProjects.filter(
        (project) => project.mainTech == filter
      );
  }
  redirectToDetail(id: any) {
    this.router.navigate(['/projects/detail', id]);
  }
}

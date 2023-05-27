import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/portfolio';
import { ProjectService } from 'src/app/project.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];
  item: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ProjectService
  ) {}

  ngOnInit(): void {
    this.projects = this.service.getAllProjects();
  }

  redirectToProjectDetail(id: any) {
    this.router.navigate(['detail', id], { relativeTo: this.route });
  }
  redirectToProjectAll() {
    this.router.navigate(['/all'], { relativeTo: this.route });
  }
}

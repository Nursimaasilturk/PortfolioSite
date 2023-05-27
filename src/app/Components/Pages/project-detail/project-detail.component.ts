import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/project.service';
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  detailProject: any;
  id: string | number | undefined;
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //URL den objenin idsini alma
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
    });
    this.detailProject = this.projectService.getProjectById(Number(this.id));

    // servisden idye göre objeyi çağırma
  }
  goToLiveUrl(url: string) {
    window.open(url, '_blank');
  }
  goToSourceUrl(url: string) {
    window.open(url, '_blank');
  }
  redirectToAllProjects() {
    this.router.navigate(['/projects/all']);
  }
}

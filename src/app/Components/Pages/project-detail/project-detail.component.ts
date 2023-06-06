import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';
import { Project } from 'src/app/portfolio';
import { ProjectService } from 'src/app/project.service';
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  detailProject: any;
  id!: number;
  data: any;
  changedLang: string = ' ';
  langTextPage: any;
  projectDetails: any;
  resultArr!: Project[];

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router,
    private gService: GlobalService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    //URL den objenin idsini alma
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.gService.selectedLang$.subscribe((value) => {
      this.changedLang = value;
    });
    this.http.get<any>('assets/data.json').subscribe((data) => {
      this.data = data;
      this.resultArr = this.getLocalText('projectD');
      this.projectDetails = this.resultArr.find(
        (project) => project.id === Number(this.id)
      );
    });
    this.langTextPage = this.projectService.getLangItemByPage('projectDetail');

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
  getLocalText(key: any) {
    return this.data != undefined
      ? this.gService.getItemFound(
          this.gService.getSeperateItem(
            this.changedLang,
            this.langTextPage[key]
          ),
          this.data
        )
      : 'loading';
  }
}

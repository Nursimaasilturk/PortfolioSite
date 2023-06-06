import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/project.service';
import { Project } from 'src/app/portfolio';
import { GlobalService } from 'src/app/global.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-all',
  templateUrl: './project-all.component.html',
  styleUrls: ['./project-all.component.scss'],
})
export class ProjectAllComponent implements OnInit {
  allProjects: Project[] = [];
  filteredProjects: Project[] = [];
  data: any;
  changedLang: string = ' ';
  langTextPage: any;
  resultArr!: [];
  constructor(
    private service: ProjectService,
    private router: Router,
    private gService: GlobalService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.gService.selectedLang$.subscribe((value) => {
      this.changedLang = value;
    });
    this.http.get<any>('assets/data.json').subscribe((data) => {
      this.data = data;
      this.allProjects = this.getLocalText('projectD');
      this.filteredProjects = this.allProjects;
    });
    this.langTextPage = this.service.getLangItemByPage('projects');
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

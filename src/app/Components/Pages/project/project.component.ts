import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/portfolio';
import { ProjectService } from 'src/app/project.service';
import { GlobalService } from 'src/app/global.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  projects!: Project[];
  data: any;
  changedLang: string = ' ';
  langTextPage: any;
  modeTheme?: string;
  isHovered: boolean = false;
  hoveredColor?: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ProjectService,
    private gService: GlobalService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.gService.selectedLang$.subscribe((value) => {
      this.changedLang = value;
    });
    this.http.get<any>('assets/data.json').subscribe((data) => {
      this.data = data;
      this.projects = this.getLocalText('projectD');
    });
    this.langTextPage = this.service.getLangItemByPage('projects');
    this.gService.selectedTheme$.subscribe((value) => {
      this.modeTheme = value;
    });
  }

  redirectToProjectDetail(id: any) {
    this.router.navigate(['detail', id], { relativeTo: this.route });
  }
  redirectToProjectAll() {
    this.router.navigate(['/all'], { relativeTo: this.route });
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

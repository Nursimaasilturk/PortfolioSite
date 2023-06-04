import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/global.service';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  data: any;
  changedLang: string = '';
  langTextPage: any;
  langTextFunc: any;
  constructor(
    private gService: GlobalService,
    private http: HttpClient,
    private pService: ProjectService
  ) {}

  ngOnInit(): void {
    this.gService.selectedLang$.subscribe((value) => {
      this.changedLang = value;
    });
    this.http.get<any>('assets/data.json').subscribe((data) => {
      this.data = data;
    });
    this.langTextPage = this.pService.getLangItemByPage('navbar');
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

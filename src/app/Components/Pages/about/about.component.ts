import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/global.service';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  data: any;
  changedLang: string = ' ';
  langTextPage: any;
  constructor(
    private http: HttpClient,
    private gService: GlobalService,
    private pService: ProjectService
  ) {}

  ngOnInit(): void {
    this.gService.selectedLang$.subscribe((value) => {
      this.changedLang = value;
    });
    this.http.get<any>('assets/data.json').subscribe((data) => {
      this.data = data;
    });
    this.langTextPage = this.pService.getLangItemByPage('about');
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

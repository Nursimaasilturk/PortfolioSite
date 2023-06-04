import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  data: any;
  changedLang: string = '';
  langTextPage: any;
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
    this.langTextPage = this.pService.getLangItemByPage('contact');
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

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {
  data: any;
  changedLang: string = '';
  langTextPage: any;
  langTextFunc: any;
  pdfPath: any;
  constructor(
    private gService: GlobalService,
    private http: HttpClient,
    private pService: ProjectService
  ) {}

  ngOnInit(): void {
    this.gService.selectedLang$.subscribe((value) => {
      this.changedLang = value;
      // updating the pdf url according to site lang
      this.pdfPath = this.getPdfUrl();
    });
    this.http.get<any>('assets/data.json').subscribe((data) => {
      this.data = data;
      this.pdfPath = this.getPdfUrl();
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
  getPdfUrl() {
    let path = this.getLocalText('url');
    return path;
  }

}

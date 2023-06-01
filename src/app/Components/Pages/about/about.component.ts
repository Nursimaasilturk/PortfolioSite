import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  data: any;
  changedLang: string = ' ';
  constructor(private http: HttpClient, private globalService: GlobalService) {}

  ngOnInit(): void {
    this.globalService.selectedLang$.subscribe((value) => {
      this.changedLang = value;
    });
    this.http.get<any>('assets/data.json').subscribe((data) => {
      this.data = data;
    });
  }
  getLocalText(page: any, key: any) {
    return this.data != undefined
      ? this.data[this.changedLang][page][key]
      : 'loading';
  }
}

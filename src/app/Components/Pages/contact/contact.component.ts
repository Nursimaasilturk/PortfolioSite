import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  data: any;
  changedLang: string = '';
  constructor(private globalService: GlobalService, private http: HttpClient) {}
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

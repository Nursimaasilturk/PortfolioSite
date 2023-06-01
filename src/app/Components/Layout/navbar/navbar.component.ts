import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
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

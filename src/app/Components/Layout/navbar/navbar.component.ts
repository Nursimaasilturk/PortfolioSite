import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  changedLang: string = '';
  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.globalService.selectedLang$.subscribe((value) => {
      this.changedLang = value;
    });
  }
}

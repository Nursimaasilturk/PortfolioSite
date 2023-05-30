import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss'],
})
export class LangComponent implements OnInit {
  selectedLangOption: string = '';
  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.globalService.selectedLang$.subscribe((value) => {
      this.selectedLangOption = value;
    });
  }
  updateSelectedLang() {
    this.globalService.setSelectedLang(this.selectedLangOption);
  }
}

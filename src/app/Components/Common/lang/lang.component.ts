import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss'],
})
export class LangComponent implements OnInit {
  selectedLangOption: string = 'EN';
  selectedTheme: any = {};
  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.globalService.selectedLang$.subscribe((value) => {
      this.selectedLangOption = value;
    });
    this.globalService.selectedTheme.subscribe((value) => {
      this.selectedTheme = value;
    });

    this.globalService.getTheme().subscribe((val) => {
      this.selectedTheme = val;
    });
  }

  onUpButtonClicked(): void {
    const newLang = this.getNextLang(this.selectedLangOption);
    this.globalService.setSelectedLang(newLang);
  }

  onDownButtonClicked(): void {
    const newLang = this.getPreviousLang(this.selectedLangOption);
    this.globalService.setSelectedLang(newLang);
  }
  getNextLang(currentLang: string): string {
    const langs = ['EN', 'TR'];
    const currentIndex = langs.indexOf(currentLang);
    const nextIndex = (currentIndex + 1) % langs.length;
    return langs[nextIndex];
  }
  getPreviousLang(currentLang: string): string {
    const langs = ['EN', 'TR'];
    const currentIndex = langs.indexOf(currentLang);
    const prevIndex = (currentIndex - 1 + langs.length) % langs.length;
    return langs[prevIndex];
  }
}

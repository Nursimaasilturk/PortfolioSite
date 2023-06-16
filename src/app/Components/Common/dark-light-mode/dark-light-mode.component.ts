import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-dark-light-mode',
  templateUrl: './dark-light-mode.component.html',
  styleUrls: ['./dark-light-mode.component.scss'],
})
export class DarkLightModeComponent implements OnInit {
  isChecked: boolean = false;
  pinkColor!: string;
  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.globalService.selectedPink.subscribe((value) => {
      this.pinkColor = value;
    });
    this.globalService.selectedCheck.subscribe((value) => {
      this.isDark();
    });
  }

  isDark() {
    if (this.isChecked) {
      this.globalService.setBlue('#78f1ff');
      this.globalService.setPink('#ff3779');
    } else {
      this.globalService.setBlue('#a5e1e9');
      this.globalService.setPink('#ff96a7');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-dark-light-mode',
  templateUrl: './dark-light-mode.component.html',
  styleUrls: ['./dark-light-mode.component.scss'],
})
export class DarkLightModeComponent implements OnInit {
  isChecked: boolean = true;
  modeTheme: Object = {};
  constructor(private globalService: GlobalService) {}
  ngOnInit(): void {}
  // checked durumuna göre Color içindeki değerleri modeTheme aktardık
  setThemeByChecked() {
    return this.isChecked ? 'dark-mode' : 'light-mode';
  }
  // modeTheme içerisindeki değeri global servicedeki Observer ile güncelledik.
  isToggleTheme() {
    this.setThemeByChecked();
    this.globalService.setSelectedTheme(this.setThemeByChecked());
  }
}

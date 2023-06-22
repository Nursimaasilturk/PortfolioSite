import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import Colors from 'src/assets/colors';

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
    return this.isChecked
      ? (this.modeTheme = { ...Colors.dark })
      : (this.modeTheme = { ...Colors.light });
  }
  // modeTheme içerisindeki değeri global servicedeki Observer ile güncelledik.
  isToggleTheme() {
    this.setThemeByChecked();
    this.globalService.setTheme(this.modeTheme);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss'],
})
export class MobileNavbarComponent implements OnInit {
  mobileOpen: boolean = false;
  constructor() {}
  ngOnInit(): void {}
  openMenu() {
    this.mobileOpen = true;
    console.log(true);
  }
  closeMenu() {
    this.mobileOpen = false;
    console.log(true);
  }
}

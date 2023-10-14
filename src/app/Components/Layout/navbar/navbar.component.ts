import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
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

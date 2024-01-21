import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  modeTheme?: string;
  constructor(private gService:GlobalService) { }

  ngOnInit(): void {
    this.gService.selectedTheme$.subscribe((val)=>{
      this.modeTheme = val;
    })
  }

}

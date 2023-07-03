import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService } from './global.service';
import { Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription | null = null;
  bodyClass: string = '';
  title = 'Portfolio';
  constructor(private gService: GlobalService, private renderer2: Renderer2) {}
  ngOnInit(): void {
    // temadaki değişikliğe göre class ismimizi ayarladık.
    // app comp.'den üstteki body tagine erişmek için renderer2 service'ni kullandık.
    this.subscription = this.gService.selectedTheme$.subscribe((value) => {
      this.bodyClass = value;
      this.renderer2.setAttribute(document.body, 'class', this.bodyClass);
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

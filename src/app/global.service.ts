import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  // başlangıçtaki dil seçeneği 'en' olduğu için değeri en olarak verdik.
  private selectedLang = new BehaviorSubject<string>('en');
  selectedLang$ = this.selectedLang.asObservable();

  constructor() {}
  // güncel dil değerini yakalama
  setSelectedLang(value: string) {
    this.selectedLang.next(value);
  }
  // her compoenentte kullanılan dil değiştişrime observable dinleme
}

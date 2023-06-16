import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  // başlangıçtaki dil seçeneği 'en' olduğu için değeri en olarak verdik.
  private selectedLang = new BehaviorSubject<string>('EN');
  selectedLang$ = this.selectedLang.asObservable();
  // Dark-Light Mode colour defining
  private currentBlue = new BehaviorSubject<string>('#78f1ff');
  selectedBlue = this.currentBlue.asObservable();
  private currentPink = new BehaviorSubject<string>('ff3779');
  selectedPink = this.currentPink.asObservable();
  private isChecked = new BehaviorSubject<boolean>(true);
  selectedCheck = this.isChecked.asObservable();
  constructor() {}
  // güncel dil değerini yakalama
  setSelectedLang(value: string) {
    this.selectedLang.next(value);
  }
  // girilen texti ayırma
  getSeperateItem(lang: string, text: string): string[] {
    const arr: string[] = text.split('.');
    arr.unshift(lang);
    return arr;
  }
  // texte göre objeden veri getirme
  getItemFound(arr: string[], obj: { [key: string]: any }): any {
    let object: { [key: string]: any } = obj;
    for (let i = 0; i < arr.length; i++) {
      if (typeof object[arr[i]] === 'object' && object[arr[i]] !== null) {
        object = object[arr[i]];
      } else if (Array.isArray(object[arr[i]])) {
        object = object[arr[i]];
      } else {
        object = object[arr[i]];
      }
    }
    return object;
  }
  // mode functions
  setBlue(color: string) {
    this.currentBlue.next(color);
  }
  setPink(color: string) {
    this.currentPink.next(color);
  }
  setChecked(mode: boolean) {
    this.isChecked.next(mode);
  }
}

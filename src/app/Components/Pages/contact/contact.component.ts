import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { Lang } from 'src/app/portfolio';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  changedLang: string = '';
  constructor(private globalService: GlobalService) {}
  Contact: { header: Lang; description: Lang; mailBox: Lang } = {
    header: {
      en: "Let's Contact",
      tr: 'İletişime geçelim',
    },
    description: {
      en: 'this is an english description',
      tr: 'bu türkçe bir açıklamadır.',
    },
    mailBox: {
      en: 'please, contact me :)',
      tr: 'benimle iletişime geç',
    },
  };
  ngOnInit(): void {
    this.globalService.selectedLang$.subscribe((value) => {
      this.changedLang = value;
    });
  }
  getHeader() {
    console.log(this.changedLang);
    return this.changedLang == 'en'
      ? this.Contact.header.en
      : this.Contact.header.tr;
  }
  getDescription() {
    return this.changedLang == 'en'
      ? this.Contact.description.en
      : this.Contact.description.tr;
  }
  getMailBox() {
    return this.changedLang == 'en'
      ? this.Contact.mailBox.en
      : this.Contact.mailBox.tr;
  }
}

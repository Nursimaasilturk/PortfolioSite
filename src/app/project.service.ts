import { Injectable } from '@angular/core';
import { Project } from './portfolio';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from 'src/app/global.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private dataUrl = 'assets/data.json';
  protected langTextAllPages: { [key: string]: object } = {
    navbar: {
      download: 'Navbar.cvButton',
      url: 'Navbar.url',
    },
    contact: {
      header: 'Contact.header',
      desc: 'Contact.description',
      mail: 'Contact.mailBox',
    },
    about: {
      name: 'About.name',
      desc: 'About.description',
      experienceHeader: 'About.experience.name',
      experienceItem: 'About.experience.item',
      educationHeader: 'About.education.name',
      educationItem: 'About.education.item',
      skillHeader: 'About.skill.name',
      skillSoftware: 'About.skill.software.name',
      skillSoftwareItem: 'About.skill.software.softwareSkill',
      skillLanguage: 'About.skill.language.name',
      skillLanguageItem: 'About.skill.language.languageSkill',
    },
    projects: {
      header: 'Projects.header',
      desc: 'Projects.desc',
      button: 'Projects.button',
      projectD: 'ProjectDetail.projects',
      all: 'ProjectAll.all',
    },
    projectDetail: {
      liveBtn: 'ProjectDetail.live',
      sourceBtn: 'ProjectDetail.source',
      link: 'ProjectDetail.link',
      projectD: 'ProjectDetail.projects',
    },
  };
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }

  getLangItemByPage(page: string): any {
    const langItem = this.langTextAllPages[page];
    return langItem;
  }
}

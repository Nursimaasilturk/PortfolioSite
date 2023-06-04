import { Injectable } from '@angular/core';
import { Project } from './portfolio';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  protected projectList: Project[] = [
    {
      id: 1,
      src: 'assets/img/sass-one-page.png',
      subImg: undefined,
      alt: 'SASS One Page',
      name: 'SASS One Page',
      usageTech: [
        {
          name: 'html',
          icon: 'fa-html5',
        },
        {
          name: 'scss',
          icon: 'fa-sass',
        },
      ],
      mainTech: 'sass',
      description:
        "Tek Sayfalık SASS Projesi, modern web tasarımının ihtiyaç duyduğu dinamik ve etkileyici kullanıcı deneyimlerini oluşturmak için SASS (Syntactically Awesome Style Sheets) teknolojisini kullanarak geliştirilen bir proje. SASS'ın güçlü yetenekleri, modüler ve ölçeklenebilir CSS kodlarının oluşturulmasını sağlarken, tek sayfalık yapısı, hızlı ve sorunsuz bir gezinme deneyimi sunar. Kullanıcı dostu arayüz tasarımı, animasyonlar, geçiş efektleri ve yenilikçi kullanıcı etkileşimleriyle projeniz için özelleştirilebilirlik ve esneklik sağlar. Tek sayfalık SASS Projesi, modern web trendlerini takip eden, etkileyici ve mükemmel performans sergileyen bir çözüm sunar.",
      githubUrl: 'https://github.com/Nursimaasilturk/SCSS-OnePage',
      netlifyUrl: 'https://sima-scss-one-page.netlify.app/',
    },
    {
      id: 2,
      src: 'assets/img/found-capital.png',
      subImg: undefined,
      alt: 'FoundCapital',
      name: 'Found Capital',
      usageTech: [
        {
          name: 'html',
          icon: 'fa-html5',
        },
        {
          name: 'css',
          icon: 'fa-css3',
        },
        {
          name: 'js',
          icon: 'fa-js',
        },
        {
          name: 'bootstrap',
          icon: 'fa-bootstrap',
        },
      ],
      mainTech: 'js',
      description:
        "Başkentleri Bul, küresel coğrafyayı keşfetmenin heyecan verici bir yoludur. Bu oyun, farklı ülkelerin başkentlerini öğrenirken dikkatinizi ve hızınızı test eder. Zamanla yarışırken, dünya haritasında yer alan ülkeleri keşfedecek ve eşleşen başkentleri bulmaya çalışacaksınız. Kendinizi meydan okumaya hazırlayın ve kültürel bilginizi geliştirirken harika bir zaman geçirin. 'Başkentleri Bul', görsel zenginlikleri, kullanıcı dostu arayüzü ve çeşitli zorluk seviyeleriyle sizleri bekliyor. Ülkelerin başkentlerini keşfetmek için hızlı düşünme ve doğru cevapları bulma becerilerinizi kullanın. Kendi rekorlarınızı kırarak, coğrafya bilginizi test edin ve arkadaşlarınızla yarışın. Bu oyunda yeni ülkeler keşfedecek, kültürel çeşitliliği deneyimleyecek ve dünya üzerindeki başkentlerin heyecan verici dünyasına dalacaksınız. Hazır mısınız? Başkentlerinizi bulmak için hızlı bir şekilde harekete geçin ve dünya turunuzda unutulmaz bir yolculuğa çıkın!",
      githubUrl: 'https://github.com/Nursimaasilturk/foundTheCapital-js',
      netlifyUrl: 'https://found-the-capital-js.netlify.app/',
    },
    {
      id: 3,
      src: 'assets/img/moonLight.png',
      subImg: undefined,
      alt: 'moonLight',
      name: 'Moonlight',
      usageTech: [
        {
          name: 'html',
          icon: 'fa-html5',
        },
        {
          name: 'css',
          icon: 'fa-sass',
        },
        {
          name: 'js',
          icon: 'fa-js',
        },
      ],
      mainTech: 'js',
      description:
        'Parallax etkisiyle tasarlanmış tek sayfalık projemiz, göz alıcı bir deneyim sunuyor. Sayfayı kaydırdıkça katmanlar arasında derinlik hissi yaratılıyor, içeriği keşfederken sizi etkileyici bir yolculuğa çıkarıyor. Modern tasarım ve akıcı geçişlerle öne çıkan bu projeyi deneyimleyin.',
      githubUrl: 'https://ayisigi.netlify.app/',
      netlifyUrl: 'https://ayisigi.netlify.app/',
    },
    {
      id: 4,
      src: 'assets/img/awatch.png',
      subImg: undefined,
      alt: 'awatch',
      name: 'Awatch',
      usageTech: [
        {
          name: 'html',
          icon: 'fa-html5',
        },
        {
          name: 'css',
          icon: 'fa-css3',
        },
        {
          name: 'js',
          icon: 'fa-js',
        },
      ],
      mainTech: 'css',
      description:
        'CSS ile yapılmış saat uygulaması, şık ve minimalist bir tasarıma sahiptir. Animasyonlu akrep ve yelkovan hareketleriyle gerçek bir saat hissi sunar. Modern ve kullanıcı dostu arayüzü ile zamanı stil sahibi bir şekilde takip etmenizi sağlar.',
      githubUrl: 'https://github.com/Nursimaasilturk/AWatch',
      netlifyUrl: 'https://awatch.netlify.app/',
    },
  ];
  protected langTextAllPages: { [key: string]: object } = {
    navbar: {
      download: 'Navbar.cvButton',
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
    },
  };
  constructor() {}

  // All projects
  getAllProjects(): Project[] {
    return this.projectList;
  }
  getProjectById(id: Number): Project | undefined {
    return this.projectList.find((project) => project.id == id);
  }
  getLangItemByPage(page: string): any {
    const langItem = this.langTextAllPages[page];
    return langItem;
  }
}

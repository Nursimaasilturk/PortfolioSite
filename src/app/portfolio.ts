export interface Project {
  id: number | string;
  src: string;
  subImg: string[] | undefined;
  alt: string;
  name: string;
  usageTech: object[];
  mainTech: string;
  description: string;
  githubUrl: string;
  netlifyUrl: string;
}
export interface Lang {
  en: string;
  tr: string;
}

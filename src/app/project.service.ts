import { Injectable } from '@angular/core';
import { Project } from './portfolio';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  protected projectList: Project[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1502085671122-2d218cd434e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1226&q=80',
      alt: 'Project 1',
      name: 'Project',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1111&q=80',
      alt: 'Project 2',
      name: 'Todo App',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1602231235593-7b55e5db426b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1314&q=80',
      alt: 'Project 3',
      name: 'Weather App',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1602231235593-7b55e5db426b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1314&q=80',
      alt: 'Project 4',
      name: 'Ecommerce Site',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1111&q=80',
      alt: 'Project 2',
      name: 'Moonlight',
    },
  ];
  constructor() {}

  // All projects
  getAllProjects(): Project[] {
    return this.projectList;
  }
  getProjectsById(id: Number): Project | undefined {
    return this.projectList.find((project) => project.id == id);
  }
}

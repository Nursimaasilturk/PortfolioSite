import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/portfolio';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  slides: Project[] = [];
  item: any;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  redirectToProjectDetail(id: any) {
    this.router.navigate(['detail', id], { relativeTo: this.route });
  }
}

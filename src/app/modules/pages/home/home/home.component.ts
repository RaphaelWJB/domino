import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header/header.component';
import { KnowledgementComponent } from '../../../components/knowledgement/knowledgement/knowledgement.component';
import { ExperienceComponent } from '../../../components/experience/experience/experience.component';
import { ProjectsComponent } from '../../../components/projects/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, KnowledgementComponent,ExperienceComponent,ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

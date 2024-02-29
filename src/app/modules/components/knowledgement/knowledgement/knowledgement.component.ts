import { Component, signal } from '@angular/core';
import { Iknowledge } from '../../interface/Iknowledge';

@Component({
  selector: 'app-knowledgement',
  standalone: true,
  imports: [],
  templateUrl: './knowledgement.component.html',
  styleUrl: './knowledgement.component.scss'
})
export class KnowledgementComponent {


  public arrayKnowledge = signal<Iknowledge[]>(
    [{
      src:"assets/icons/knowledge/html5.svg",
      alt: "Icone de conhecimento em html5."

    },
    {
      src:"assets/icons/knowledge/css3.svg",
      alt: "Icone de conhecimento em css3."

    },
    {
      src:"assets/icons/knowledge/angular.svg",
      alt: "Icone de conhecimento em angular."

    },
    {
      src:"assets/icons/knowledge/javascript.svg",
      alt: "Icone de conhecimento em javascript"

    },
    {
      src:"assets/icons/knowledge/nodejs.svg",
      alt: "Icone de conhecimento em nodeJs"

    },
     ]
  )






}

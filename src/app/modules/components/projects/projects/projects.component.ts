import { Component, inject, signal } from '@angular/core';
import { Iprojects } from '../../interface/IProjects';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../../dialog/dialog-projects/dialog-projects.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})


export class ProjectsComponent {

  #dialog = inject(MatDialog);

  public arrayProjects = signal<Iprojects[]>([
    {
      src:'assets/img/projects/vfull.png',
      alt: 'Projeto vida fullStack',
       title: 'Vida FullStack',
        width:'100px',
         height: '51px',
          description: 
          '<p>Explore o fascinante mundo do desemvolvimento no meu blog dedicado exclusivamento aos Dev´s</p>',
          link: [{
            name: 'Conheça o blog',
            href: 'https://vidafullstack.com.br'
          }]
      },
      {
        src:'assets/img/projects/vfull.png',
        alt: 'Projeto vida fullStack',
         title: 'Vida FullStack',
          width:'100px',
           height: '51px',
            description: 
            '<p>Explore o fascinante mundo do desemvolvimento no meu blog dedicado exclusivamento aos Dev´s</p>',
            link: [{
              name: 'Conheça o blog',
              href: 'https://vidafullstack.com.br'
            }]
        },
        {
          src:'assets/img/projects/vfull.png',
          alt: 'Projeto vida fullStack',
           title: 'Vida FullStack',
            width:'100px',
             height: '51px',
              description: 
              '<p>Explore o fascinante mundo do desemvolvimento no meu blog dedicado exclusivamento aos Dev´s</p>',
              link: [{
                name: 'Conheça o blog',
                href: 'https://vidafullstack.com.br'
              }]
          },
          {
            src:'assets/img/projects/vfull.png',
            alt: 'Projeto vida fullStack',
             title: 'Vida FullStack',
              width:'100px',
               height: '51px',
                description: 
                '<p>Explore o fascinante mundo do desemvolvimento no meu blog dedicado exclusivamento aos Dev´s</p>',
                link: [{
                  name: 'Conheça o blog',
                  href: 'https://vidafullstack.com.br'
                }]
            },
            {
              src:'assets/img/projects/vfull.png',
              alt: 'Projeto vida fullStack',
               title: 'Vida FullStack',
                width:'100px',
                 height: '51px',
                  description: 
                  '<p>Explore o fascinante mundo do desemvolvimento no meu blog dedicado exclusivamento aos Dev´s</p>',
                  link: [{
                    name: 'Conheça o blog',
                    href: 'https://vidafullstack.com.br'
                  }]
              }
  ]);

   
  public openDialog(data: Iprojects){
    this.#dialog.open(DialogProjectsComponent,{
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }


}

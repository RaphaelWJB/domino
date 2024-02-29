import { Component, signal } from '@angular/core';
import { Iexperiences } from '../../interface/IExperiences';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  
  public arrayExperience = signal<Iexperiences[]>(
    [
      {
      summary: {
        strong: "Auxiliar de informatica:",
        p: "Cultura Digital - GO | JUN 2017 - DEZ 2018"
      },
      text: `<p>Aqui, destaco com todo grandeza o inicio da minha caminhada no mundo da técnologia da informação. Este foi
      o inicio de grandes passos onde trabalhei como AUTONOMO em uma pequena empresa de informática em que pude prestar
      serviços de atendimento ao público, formatação de computador e configuração de roteador!</p>`
     },
      {
      summary: {
        strong: "Auxiliar de TI:",
        p: "Faculdade MAUA - GO | JAN 2019 - ABR 2020"
      },
      text: `<p>O segundo inicio na minha carreira de TI, continuou a partir daqui, 
      onde obtive grandes pontos de conhecimentos e também problemas que precisavam de soluções eficazes. 
      Aqui aprendi a trabalhar com Mikrotik, cabeamento, configurações de roteadores, switchs e helpDesk.
      </p>
      <p>
      Destaco também, que tive a oportunidade de utilizar a ferramenta WordPress e FileZilla para manipulação do site e transferência de arquivos,
      onde, foi um inicio de grande interesse para adquirir conhecimentos voltados para a programação, especialmente o FrontEnd!
      </p>`
     },
     {
      summary: {
        strong: "Técnico de Telecom:",
        p: "Cerrado Internet | MAI 2020 - OUT 2020"
      },
      text: `<p>Ainda dentro da área de TI, conheci uma nova etapa, onde  pude atuar em campo com instalação e manutenção de Rádio e FTTH. Este foi
       um marco para a compreensão do funcionamento e a complexidade demandada de esforço para a exercer função!</p>`
     },
     {
      summary: {
        strong: "Suporte Técnico:",
        p: "Cerrado Internet  | OUT 2020 - JAN 2024"
      },
      text: `<p>Essa é uma continuidade da 3° experiência a cima que também me permitiu continuar trabalhando diretamente com rede de internet, porém, em outra função!
       Aqui desenvolvi experiência na administração de sistemas como BeesWeb, ReceitaNet, SGP(Sistema de Gerenciamento para Provedores) e UISP Design Center utilizado para
       traçar rotas de rádio e verificação da integridade de liberação do sinal! ,
      </p>`
     },

]
  )
}

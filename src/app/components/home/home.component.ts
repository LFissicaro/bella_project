import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images: any[] = [];

  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

  constructor() { }

  ngOnInit(): void {
    this.images = [{id:1, name:'comida1', path:'../../../assets/images/comida1.png'},
                   {id:2, name:'comida2', path:'../../../assets/images/comida2.png'},
                   {id:3, name:'comida3', path:'../../../assets/images/comida3.png'}]
  }

  introText: string = "Somos  uma empresa apaixonada pela alimentação saudável, que ama transformar alimentos em refeições nutritivas com aquele gostinho de caseiro. Trabalhamos para que  todos tenham  acesso a uma alimentação de qualidade e tempo livre para aproveitar os momentos especiais da vida."
  introText2: string = "Faz parte da nossa cultura depositar diariamente, amor, carinho e dedicação em cada preparo e isso se reflete em cada cardápio que lançamos e a cada entrega que realizamos." 
  text1: string = "O primeiro prato e composto de um hamburguer vegano com brocolis feito no vapor e tomate cereja, e o segundo é o nosso famoso hamburguer de abobora."
  aboutText: string = "Somos uma empresa apaixonada pela alimentação saudável, que ama transformar alimentos em refeições nutritivas com aquele gostinho de caseiro. Trabalhamos para que todos tenham acesso a uma alimentação de qualidade e tempo livre para aproveitar os momentos especiais da vida. Faz parte da nossa cultura depositar diariamente, amor, carinho e dedicação em cada preparo e isso se reflete em cada cardápio que lançamos e a cada entrega que realizamos.";
}

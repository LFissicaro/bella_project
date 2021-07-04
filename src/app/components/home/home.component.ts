import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.images = [{id:1, name:'comida1', path:'../../../assets/images/comida1.png'},{id:2, name:'comida2', path:'../../../assets/images/comida2.png'},{id:3, name:'comida3', path:'../../../assets/images/comida3.png'}]
  }

  introText: string = "Nós somos o Bella Cucina e viemos para mudar a sua vida!"
  introText2: string = "Trazemos a melhoria da qualidade de vida em forma de refeições deliciosas!"

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cardItem={
    company:'Atasayar Teknoloji',
    title:'Front End Developer',
    name:'Neslihan Atasever',
    phone:'0555 555 55 55',
    email:'info@neslihan.com.tr',
    address:'Merkez,DÜZCE'
  }
  constructor() { }

  ngOnInit(): void {
  }

}

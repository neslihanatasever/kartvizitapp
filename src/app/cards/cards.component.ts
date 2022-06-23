import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CardModelComponent} from "./card-model/card-model.component";

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
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openAddCardModel(){
    this.dialog.open(CardModelComponent, {
      width: '400px'
    })
  }
}

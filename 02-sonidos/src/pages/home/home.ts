import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ANIMALES } from "../../data/data.animales";
import { animal } from "../../interfaces/animal.interface";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  animales:any[]=[];

  constructor() {

    this.animales=ANIMALES.splice(0);

  }

  reproducir (animal:Animal){
    console.log(animal);
  }

}

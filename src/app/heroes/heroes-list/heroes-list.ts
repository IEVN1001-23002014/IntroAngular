import { Component } from '@angular/core';
import { IHeroes } from '../heroes';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.html',
})
export class HeroesList {
  imageWidth:number=40;
  imageMargin: number=2;
  muestraImage: boolean=true;
  listfilter:string='';

  showImage():void{
    this.muestraImage=!this.muestraImage;
  }


  heroes:IHeroes[]=[
    {
      imagen:"https://dragonball-api.com/characters/goku_normal.webp",
      nombre: "Goku",
      description:"Kame hame ha",
      race: "Saiyan",
      ki: 9000
    },
    {
      imagen:"https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre: "Vegeta",
      description:"Final flash",
      race: "Saiyan",
      ki: 8500
    },
    {
      imagen:"https://dragonball-api.com/characters/picolo_normal.webp",
      nombre: "Piccolo",
      description:"Dios mio señor salvame",
      race: "Namekian",
      ki: 9000
    },
    {
      imagen:"https://dragonball-api.com/characters/Freezer.webp",
      nombre: "Freezer",
      description:"Ou yea chacarron",
      race: "Frieza",
      ki: 8
    }
  ]
}

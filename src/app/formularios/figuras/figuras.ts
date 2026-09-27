import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: false,
  styleUrl: './figuras.css',
  templateUrl: './figuras.html',
})
export class Figuras {
  selectedShape: string = '';
  
  
  base: number = 0;
  height: number = 0;
  radius: number = 0;
  side: number = 0;
  apothem: number = 0;
  
  area: number | null = null;

  calculateArea() {
    switch (this.selectedShape) {
      case 'triangulo':
        this.area = (this.base * this.height) / 2;
        break;
      case 'rectangulo':
        this.area = this.base * this.height;
        break;
      case 'circulo':
        this.area = Math.PI * Math.pow(this.radius, 2);
        break;
      case 'pentagono':
       
        this.area = (5 * this.side * this.apothem) / 2;
        break;
      default:
        this.area = null;
    }
  }

  
  onShapeChange() {
    this.area = null;
    this.base = 0;
    this.height = 0;
    this.radius = 0;
    this.side = 0;
    this.apothem = 0;
  }
}

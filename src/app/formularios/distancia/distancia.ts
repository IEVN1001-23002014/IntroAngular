import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,
  templateUrl: './distancia.html',
})
export class Distancia {
  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;
  
  // Usamos null para que la alerta no aparezca hasta que se calcule
  distancia: number | null = null;

  calcularDistancia() {
    // Aseguramos que los valores sean tratados como números
    const px1 = Number(this.x1);
    const py1 = Number(this.y1);
    const px2 = Number(this.x2);
    const py2 = Number(this.y2);

    // Aplicamos la fórmula mostrada en tu imagen: d = √((x2 - x1)² + (y2 - y1)²)
    
    // 1. Restas (x2 - x1) y (y2 - y1)
    const restaX = px2 - px1;
    const restaY = py2 - py1;

    // 2. Elevamos al cuadrado y sumamos: (x2 - x1)² + (y2 - y1)²
    const sumaCuadrados = Math.pow(restaX, 2) + Math.pow(restaY, 2);

    // 3. Sacamos la raíz cuadrada
    this.distancia = Math.sqrt(sumaCuadrados);
  }
}

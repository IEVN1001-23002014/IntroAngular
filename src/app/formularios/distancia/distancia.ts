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
  palabra: string = '';
  esPalindromo: boolean | null = null;
  mensaje: string = '';
  
  // Usamos null para que la alerta no aparezca hasta que se calcule
  distancia: number | null = null;

  calcularDistancia() {
    // Aseguramos que los valores sean tratados como números
    const px1 = Number(this.x1);
    const py1 = Number(this.y1);
    const px2 = Number(this.x2);
    const py2 = Number(this.y2);

  
    
    // 1. Restas (x2 - x1) y (y2 - y1)
    const restaX = px2 - px1;
    const restaY = py2 - py1;

    // 2. Elevamos al cuadrado y sumamos: (x2 - x1)² + (y2 - y1)²
    const sumaCuadrados = Math.pow(restaX, 2) + Math.pow(restaY, 2);

    // 3. Sacamos la raíz cuadrada
    this.distancia = Math.sqrt(sumaCuadrados);
  }
  verificar() {
    // Si el input está vacío, no hacer nada
    if (this.palabra.trim() === '') {
      this.esPalindromo = null;
      return;
    }

    // 1. Limpiar el texto: minúsculas y eliminar todo lo que no sea letra/número (incluidos espacios)
    // Nota: Para soportar acentos se puede usar normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    let textoLimpio = this.palabra
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Quita los acentos
      .replace(/[^a-z0-9]/g, '');      // Quita espacios y signos de puntuación

    // 2. Crear la versión invertida
    let textoInvertido = textoLimpio.split('').reverse().join('');

    // 3. Comparar
    this.esPalindromo = (textoLimpio === textoInvertido);

    // 4. Asignar mensaje para la vista
    if (this.esPalindromo) {
      this.mensaje = `¡Sí! "${this.palabra}" se lee igual al derecho y al revés.`;
    } else {
      this.mensaje = `No, "${this.palabra}" no es un palíndromo.`;
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  styleUrl: './cinepolis.css',
  templateUrl: './cinepolis.html',
})
export class Cinepolis {
 nombre: string = '';
  cantidadPersonas: number = 1;
  cantidadBoletos: number = 1;
  usaCineco: boolean = false;

  totalPagar: number | null = null;
  mensajeError: string = '';
  readonly PRECIO_BOLETO: number = 12;

  calcularPago() {
    this.mensajeError = '';
    this.totalPagar = null;

    const personas = Number(this.cantidadPersonas);
    const boletos = Number(this.cantidadBoletos);
    const limiteBoletos = personas * 7;
    
    if (boletos > limiteBoletos) {
      this.mensajeError = `Límite excedido. Máximo ${limiteBoletos} boletos para ${personas} personas.`;
      return; 
    }

    if (boletos <= 0 || personas <= 0) {
      this.mensajeError = 'Cantidades inválidas.';
      return;
    }

    let totalBruto = boletos * this.PRECIO_BOLETO;
    let porcentajeDescuento = 0;

    if (boletos > 5) {
      porcentajeDescuento = 0.15;
    } else if (boletos >= 3 && boletos <= 5) {
      porcentajeDescuento = 0.10;
    } 

    let totalConDescuento = totalBruto - (totalBruto * porcentajeDescuento);

    if (this.usaCineco) {
      totalConDescuento = totalConDescuento - (totalConDescuento * 0.10);
    }

    this.totalPagar = totalConDescuento;
  }

  
  salir() {
    this.nombre = '';
    this.cantidadPersonas = 1;
    this.cantidadBoletos = 1;
    this.usaCineco = false;
    this.totalPagar = null;
    this.mensajeError = '';
  }
}

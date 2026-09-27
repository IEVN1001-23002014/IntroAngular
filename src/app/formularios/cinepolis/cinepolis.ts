import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  styleUrl: './cinepolis.css',
  templateUrl: './cinepolis.html',
})
export class Cinepolis {
  // Entradas del usuario
  nombre: string = '';
  cantidadPersonas: number = 1;
  cantidadBoletos: number = 1;
  usaCineco: boolean = false;

  // Variables para mostrar en el resumen
  nombreResumen: string = '';
  boletosResumen: number = 0;
  limiteBoletos: number = 0;
  totalPagar: number | null = null;
  mensajeError: string = '';

  // Constante del precio
  readonly PRECIO_BOLETO: number = 12000;

  calcularPago() {
    // 1. Limpiar mensajes previos
    this.mensajeError = '';
    this.totalPagar = null;

    // Convertir a números para evitar errores
    const personas = Number(this.cantidadPersonas);
    const boletos = Number(this.cantidadBoletos);

    // 2. Validar límite de boletos (máximo 7 por persona)
    this.limiteBoletos = personas * 7;
    
    if (boletos > this.limiteBoletos) {
      this.mensajeError = `Error: No puedes comprar ${boletos} boletos. El límite es de 7 por persona (Máximo ${this.limiteBoletos} boletos para ${personas} personas).`;
      return; // Detenemos la ejecución si se excede el límite
    }

    if (boletos <= 0 || personas <= 0) {
      this.mensajeError = 'La cantidad de personas y boletos debe ser mayor a 0.';
      return;
    }

    // 3. Calcular el costo bruto
    let totalBruto = boletos * this.PRECIO_BOLETO;
    let porcentajeDescuento = 0;

    // 4. Aplicar la lógica de descuentos por cantidad
    if (boletos > 5) {
      porcentajeDescuento = 0.15; // 15% de descuento
    } else if (boletos >= 3 && boletos <= 5) {
      porcentajeDescuento = 0.10; // 10% de descuento
    } else {
      porcentajeDescuento = 0;    // Sin descuento (1 o 2 boletos)
    }

    let totalConDescuento = totalBruto - (totalBruto * porcentajeDescuento);

    // 5. Aplicar descuento adicional por tarjeta CINECO (sobre el valor a pagar actual)
    if (this.usaCineco) {
      totalConDescuento = totalConDescuento - (totalConDescuento * 0.10);
    }

    // 6. Asignar valores finales para mostrar en la interfaz
    this.nombreResumen = this.nombre;
    this.boletosResumen = boletos;
    this.totalPagar = totalConDescuento;
  }
}

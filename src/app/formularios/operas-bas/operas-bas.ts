import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.html',
})
export class OperasBas {

  num1:number=0
  num2:number=0
  resultado:number=0
  operacion: string = 'sumar';

  calcular() {
    switch (this.operacion) {
      case 'sumar':
        this.resultado = Number(this.num1) + Number(this.num2);
        break;
      case 'restar':
        this.resultado = Number(this.num1) - Number(this.num2);
        break;
      case 'multiplicar':
        this.resultado = Number(this.num1) * Number(this.num2);
        break;
      case 'dividir':
        this.resultado = this.num2 !== 0 ? Number(this.num1) / Number(this.num2) : 0;
        break;
      default:
        alert('Por favor selecciona una operación');
        break;
    }
  }
}

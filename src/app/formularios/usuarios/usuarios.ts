import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  styleUrl: './usuarios.css',
  templateUrl: './usuarios.html',
})
export class Usuarios {

  // 1. Datos del sistema hardcodeados y definidos en variables
  readonly usuarioCorrecto: string = 'admin';
  readonly contrasenaCorrecta: string = '12345';

  // 2. Variables para capturar lo que el usuario escribe
  usuarioIngresado: string = '';
  contrasenaIngresada: string = '';

  // 3. Variables para manejar el mensaje de retroalimentación
  mensaje: string = '';
  accesoPermitido: boolean = false;

  // 4. Método que realiza la validación
  validarCredenciales(): void {
    // Utilizando estrictamente if, else if y else
    if (this.usuarioIngresado !== this.usuarioCorrecto) {
      
      this.mensaje = 'El nombre de usuario no es válido.';
      this.accesoPermitido = false;

    } else if (this.contrasenaIngresada !== this.contrasenaCorrecta) {
      
      this.mensaje = 'La contraseña no es válida.';
      this.accesoPermitido = false;

    } else {
      
      this.mensaje = `Bienvenido al sistema, ${this.usuarioCorrecto}.`;
      this.accesoPermitido = true;

    }
  }
}

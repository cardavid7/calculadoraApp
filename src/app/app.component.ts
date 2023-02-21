import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalculadoraApp';
  year = new Date().getFullYear();

  result: string = '';
  valor1: string = '';
  valor2: string = '';
  operador: string = '';

  borradoTotal() {
    this.result = '';
    this.valor1 = '';
    this.valor2 = '';
    this.operador = '';
  }

  borradoParcial() {
    this.result = '';
  }

  back() {
    this.result = this.result.substring(0, this.result.length - 1);
  }

  addToResult(input: string): String {

    if (input == '+' || input == '-' || input == '*' || input == '/') {
      if (this.operador.length > 0) {
        this.operador = input;
      } else {
        this.valor1 = this.result;
        this.valor2 = '';
        this.result = '';
        this.operador = input;
      }
    } else {
      this.result += input;
    }
    return this.result;
  }

  calculate() {

    if (this.result.length == 0) {
      this.valor2 = this.valor1;
    }

    if (this.valor2.length == 0) {
      this.valor2 = this.result;
    }

    if (this.operador == '+') {
      this.result = this.suma(this.valor1, this.valor2).toString();
    } else if (this.operador == '-') {
      this.result = this.resta(this.valor1, this.valor2).toString();
    } else if (this.operador == '*') {
      this.result = this.multiplicacion(this.valor1, this.valor2).toString();
    } else if (this.operador == '/') {
      this.result = this.division(this.valor1, this.valor2).toString();
    }

    this.valor1 = this.result;
    this.operador = '';

  }

  suma(valor1: string, valor2: string): number {
    return parseFloat(valor1) + parseFloat(valor2);
  }
  resta(valor1: string, valor2: string): number {
    return parseFloat(valor1) - parseFloat(valor2);
  }
  multiplicacion(valor1: string, valor2: string): number {
    return parseFloat(valor1) * parseFloat(valor2);
  }
  division(valor1: string, valor2: string): number {
    return parseFloat(valor1) / parseFloat(valor2);
  }
}

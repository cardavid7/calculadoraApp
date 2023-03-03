import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'CalculadoraApp';
  result: string = '';
  value: number = 0;
  operador: string = '';
  resetResult: boolean = false;

  borradoTotal() {
    this.result = '';
    this.value = 0;
    this.operador = '';
    this.resetResult = false;
  }

  borradoParcial() {
    this.result = '';
  }

  back() {
    this.result = this.result.substring(0, this.result.length - 1);
  }

  addToResult(input: string): string {

    if (this.resetResult == true) {

      this.result = '';
      this.resetResult = false;
    }

    this.result = this.armaNumero(input);
    return this.result;
  }

  operator(input: string) {

    if (this.resetResult == true) {

      this.operador = input;
      return;
    }

    if ((this.result.length == 0 || this.result == '+' || this.result == '-') && (input == '+' || input == '-')) {

      this.result = input;
      return;
    }

    if ((this.result.length == 0 || this.result == '+' || this.result == '-') && (input == '*' || input == '/')) {

      return;
    }

    if (this.value == 0) {

      this.value = parseFloat(this.result);
      this.resetResult = true;
      this.operador = input;

    } else if (this.result.length > 0) {

      this.result = this.realizaOperacion(this.value, parseFloat(this.result), this.operador);
      this.value = parseFloat(this.result);
      this.resetResult = true;
      this.operador = input;
    }
  }

  calculate() {

    if ((this.operador.includes('+') || this.operador.includes('-') || this.operador.includes('*') || this.operador.includes('/')) &&
      this.value != 0 && parseFloat(this.result) != 0) {
      this.result = this.realizaOperacion(this.value, parseFloat(this.result), this.operador);
      this.value = parseFloat(this.result);
      this.resetResult = true;
    }
  }

  armaNumero(input: string) {

    if (input == '.') {
      if (!this.result.includes('.')) {
        if (this.result.length == 0) {

          this.result = "0";
        }
        this.result += input;
        return this.result;
      }
    } else {
      if (this.result.startsWith('0.') && input == '0') {
        this.result += input;
        return this.result;

      } else if (this.result.startsWith('0') && input == '0') {
        return this.result;
      }
      this.result += input;
    }
    return this.result;
  }

  realizaOperacion(valor1: number, valor2: number, operador: string): string {
    let value: number = 0;

    if (operador == '+') {
      value = valor1 + valor2;
    } else if (operador == '-') {
      value = valor1 - valor2;
    } else if (operador == '*') {
      value = valor1 * valor2;
    } else if (operador == '/') {
      value = valor1 / valor2;
    }
    return value.toString();
  }

}

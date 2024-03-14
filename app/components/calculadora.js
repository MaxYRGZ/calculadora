import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CalculadoraComponent extends Component {
    @tracked resultado = 0;
     primerNumero = 0;
     segundoNumero = 0;

    @action
    sumar() {
        this.resultado = this.primerNumero + this.segundoNumero;
    }

    @action
    restar() {
        this.resultado = this.primerNumero - this.segundoNumero;

    }
    @action
    mul() {
        this.resultado = this.primerNumero * this.segundoNumero;
    }
    @action
    div() {
        this.resultado = this.primerNumero / this.segundoNumero;
    }
    @action
    actualizarPrimerNumero(event) {
        this.primerNumero = parseFloat(event.target.value);
    }

    @action
    actualizarSegundoNumero(event) {
        this.segundoNumero = parseFloat(event.target.value);
    }

}

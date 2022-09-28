import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent implements OnInit {

  private poucanca: number = 10;
  private carteira: number = 50;

  constructor() { }

  ngOnInit(): void {
  }

  get getPoupanca(): number{
    return this.poucanca;
  }

  get getCarteira(): number{
    return this.carteira;
  }


  public setSacar(value: string): number | undefined{
    const sacar = Number(value);

    if(isNaN(sacar) || this.poucanca < sacar) {
      // alert("Valor invalido!");
      return;
    }

    this.poucanca -= sacar;
    return (this.carteira += sacar);
  }

  public setDepositar(value: string): number | undefined{
    const depositar = Number(value);

    if(isNaN(depositar) || this.carteira < depositar) {
      // alert("O valor depositado não é valido!");
      return;
    }

    this.carteira -= depositar;
    return (this.poucanca += depositar);
  }

}

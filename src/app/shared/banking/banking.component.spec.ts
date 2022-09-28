import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';
import {ListComponent} from '../investiments/components/list/list.component';


import { HttpClientTestingModule} from '@angular/common/http/testing'

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent, ListComponent ],
      imports:[HttpClientTestingModule,],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`(U) getPoupanca(): shoud have poupanca = 10`,() => {
    expect(component.getPoupanca).toEqual(10);
  });

  it(`(U) getCarteira(): shoud have carteira = 50`, () => {
    expect(component.getCarteira).toEqual(50);
  });

  it(`(U) setSacar(): shoud transfer ṕupanca from carteira`, () => {
    component.setSacar('10'); // chama a função e efetua o saque
    // fixture.detectChanges(); //detecta alguma mudança (Usado em testes visuais) não precisa teste em unidade passando os valores

    // esperado
    expect(component.getPoupanca).toEqual(0);
    expect(component.getCarteira).toEqual(60);
  });

  it(`(I) setSacar(): shoud transfer poupanca from carteira`, () => {
    //debugElement: debuga os elementos na tela.
    let el = fixture.debugElement.nativeElement; //el: element

    el.querySelector('#input-sacar').value = '10';
    el.querySelector('#sacar').click();
    fixture.detectChanges(); //detecta mudança

    expect(el.querySelector('#get-carteira').textContent).toEqual('60.00');
  });

  it(`
    (U) setSacar(): shoud transfer poupaca dont
    have string (isNaN) or poupaca < value
    `, () => {
    expect(component.setSacar('string')).not.toBeTruthy(); // não pode ser (Se for passado um string não pode ser um valor verdadeiro)
    expect(component.setSacar('100')).not.toBeTruthy(); // não pode ser  (se eu passar um valor)

    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  });

  it(`
    (U) setDepositar(): shoud transfer carteira
    from poupanca
    `, () => {
    component.setDepositar('50');

    expect(component.getCarteira).toEqual(0);
    expect(component.getPoupanca).toEqual(60);
  });
  it(`
    (U) setDepositar(): shoud transfer carteira dont
    have string (isNaN) or carteira < value
    `, () => {
    expect(component.setDepositar('string')).not.toBeTruthy(); // não pode ser (Se for passado um string não pode ser um valor verdadeiro)
    expect(component.setDepositar('100')).not.toBeTruthy(); // não pode ser  (se eu passar um valor)

    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  });


  it(`(I) setDepositar(): shoud transfer carteira from poupanca`, () => {
    //debugElement: debuga os elementos na tela.
    let el = fixture.debugElement.nativeElement; //el: element

    el.querySelector('#input-depositar').value = "10";
    el.querySelector('#depositar').click();
    fixture.detectChanges(); //detecta mudança

    expect(el.querySelector('#get-poupanca').textContent).toEqual('20.00');
    expect(component.getCarteira).toEqual(40);
  });
});

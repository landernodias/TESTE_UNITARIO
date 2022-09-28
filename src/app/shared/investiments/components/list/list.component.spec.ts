import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Investiments } from '../../model/investiments';
import { ListInvestimentsService } from '../../services/list-investiments.service';
import { MOCK_LIST } from '../../services/list-investments.mock';

import { ListComponent } from './list.component';

describe('ListComponent', () => {

  const mockList: Array<Investiments> = MOCK_LIST;

  let service: ListInvestimentsService;
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    service = TestBed.inject(ListInvestimentsService);
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`(U) should list investiments`, () =>{
    let investiments = component.investiments;
    //espiona metodo da função
    spyOn(service, 'list').and.returnValue(of(mockList)); // espiona e muda para os dados mocados

    component.ngOnInit(); // troca ao iniciar
    fixture.detectChanges();

    expect(service.list).toHaveBeenCalledWith(); // espero que ele tenha feito as suas açoes spyOn
    expect(component.investiments.length).toBe(5);
    expect(component.investiments[0].name).toEqual('Banco 1');
    expect(component.investiments[1].name).toEqual('Banco 2');
    expect(component.investiments[2].name).toEqual('Banco 3');
    expect(component.investiments[3].name).toEqual('Banco 4');
    expect(component.investiments[4].name).toEqual('Banco 5'); // é igual a string
    expect(component.investiments[4].value).toBe(100); // contem esse valor

  });

  it(`(I) should list invertments `, () => {

    spyOn(service, 'list').and.returnValue(of(mockList)); // espiona os valores do servidor e troca os valores pelo mock

    component.ngOnInit();
    fixture.detectChanges();

    let investiments = fixture.debugElement.nativeElement.querySelectorAll('.list-itens');

    expect(investiments.length).toEqual(5);
    expect(investiments[0].textContent.trim()).toEqual('Banco 1 | 100');
    expect(investiments[1].textContent.trim()).toEqual('Banco 2 | 100');
    expect(investiments[2].textContent.trim()).toEqual('Banco 3 | 100');
    expect(investiments[3].textContent.trim()).toEqual('Banco 4 | 100');
    expect(investiments[4].textContent.trim()).toEqual('Banco 5 | 100');
  });
});

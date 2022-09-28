import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//Interface
import { Investiments } from '../model/investiments';

@Injectable({
  providedIn: 'root'
})
export class ListInvestimentsService {
  private url: string =
  'https://raw.githubusercontent.com/landernodias/fake-server-angular-tests/main/banks.json';


  constructor(
    private http: HttpClient
  ) { }

  public list():Observable<Array<Investiments>>{ // increve para observar investiments
    return this.http.get<Array<Investiments>>(this.url).pipe(map(res => res)); // faz um get do tipo investiments
  }

}

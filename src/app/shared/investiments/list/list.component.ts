import { Component, OnInit } from '@angular/core';
import { Investiments } from '../model/investiments';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public investiments:Array<Investiments> = [
    {
      name: "itaú",
      value: 100
    },
    {
      name: "Banco do Brasil",
      value: 100
    },
    {
      name: "Nubanck",
      value: 100
    },
    {
      name: "Inter",
      value: 100
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

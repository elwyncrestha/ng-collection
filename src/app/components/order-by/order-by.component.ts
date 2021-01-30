import { Component, OnInit } from '@angular/core';

const PersonProps = ['id', 'name', 'date'];

interface Person {
  id: number;
  name: string;
  date: Date | string;
}

@Component({
  selector: 'app-order-by',
  templateUrl: './order-by.component.html',
  styleUrls: ['./order-by.component.scss']
})
export class OrderByComponent implements OnInit {
  public persons: Person[];
  public sort: {
    col: string;
    isDesc: boolean;
  } = {
    col: PersonProps[0],
    isDesc: false
  };
  public PersonProps = PersonProps;

  constructor() { }

  ngOnInit(): void {
    this.persons = [
      { id: 10, name: 'Jack Dorsey', date: '2020-01-10' },
      { id: 1, name: 'Marry Jane', date: '2022-01-10' },
      { id: 12, name: 'John Terry', date: '2021-06-10' },
      { id: 6, name: 'Tisa Moh', date: '2021-04-10' },
    ];
  }

  sortChange(col: string): void {
    this.sort.isDesc = this.sort.col === col ? !this.sort.isDesc : false;
    this.sort.col = col;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  public inputs = {
    trimLeadingZeros: '0012020'
  };

  constructor() { }

  ngOnInit(): void {
  }

}

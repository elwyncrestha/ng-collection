import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trimleadingzeros',
  templateUrl: './trimleadingzeros.component.html',
  styleUrls: ['./trimleadingzeros.component.scss']
})
export class TrimleadingzerosComponent implements OnInit {
  public inputs = {
    trimLeadingZeros: '0012020'
  };

  constructor() { }

  ngOnInit(): void {
  }

}

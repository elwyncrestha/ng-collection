import { Component, OnInit } from '@angular/core';
import { SafePipeType } from 'src/app/pipes/collections';

@Component({
  selector: 'app-safe',
  templateUrl: './safe.component.html',
  styleUrls: ['./safe.component.scss']
})
export class SafeComponent implements OnInit {
  public testHtml: string;
  public SafePipeType = SafePipeType;

  constructor() { }

  ngOnInit(): void {
    this.testHtml = '<button>Click</button>';
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dt-dinotable',
  templateUrl: './dinotable.component.html',
  styleUrls: ['./dinotable.component.scss']
})
export class DinotableComponent implements OnInit {

  constructor() { }

  @Input('msg') msg:string="";

  ngOnInit(): void {
  }

}

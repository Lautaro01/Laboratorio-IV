import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-nombreytipo',
  templateUrl: './nombreytipo.component.html',
  styleUrls: ['./nombreytipo.component.css']
})
export class NombreytipoComponent implements OnInit {

  @Input() nombre : string;
  @Input() tipo : string;

  constructor() { }

  ngOnInit() {
  }

}

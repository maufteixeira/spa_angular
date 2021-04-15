import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {alunos} from 'src/app/model/alunos';

@Component({
  selector: 'spa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'spaangular';

  constructor() { }

  ngOnInit(): void {

  }

}

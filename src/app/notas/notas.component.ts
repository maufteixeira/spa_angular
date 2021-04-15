import { Component, OnInit } from '@angular/core';
import { notas } from '../model/notas';

@Component({
  selector: 'spa-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit{

  constructor() { }

  exibeTabela = false;

  media = parseFloat;
  nota1 = parseFloat;
  nota2 = parseFloat;
  nota3 = parseFloat;
  nota4 = parseFloat;

  listaNotas: notas[] = [
    { _aluno: 'Camila', nota1: 8, nota2: 9, nota3: 9, nota4: 7 },
    { _aluno: 'Teste', nota1: 7.5, nota2: 7, nota3: 8, nota4: 8 },
    { _aluno: 'Teste 2', nota1: 7, nota2: 7.5, nota3: 8, nota4: 9 },
    { _aluno: 'Teste 3', nota1: 8.3, nota2: 8, nota3: 8.2, nota4: 9.5 }
  ];

  displayedColumns: string[] = ['Aluno', '1º trimestre', '2º trimestre', '3º trimestre', '4º trimestre'];

  ngOnInit(): void {

    this.exibeTabela = true;

  }

}

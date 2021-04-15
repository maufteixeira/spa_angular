import { Component, OnInit } from '@angular/core';
import {alunos} from '../model/alunos';

@Component({
  selector: 'spa-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit{

  constructor() { }

  exibeTabela = false;

  listaAlunos: alunos[] = [
    { nome: 'Camila', idade: 27,  sexo: 'Fem', dtNascimento: '24/01/1994', curso: 'Ciencia da Computacao' },
    { nome: 'Teste', idade: 25,  sexo: 'Fem', dtNascimento: '24/01/1994', curso: 'Analise e desenvolvimento de sistemas' },
    { nome: 'Teste 2', idade: 31,  sexo: 'Fem', dtNascimento: '24/01/1994', curso: 'Engenharia da computacao' },
    { nome: 'Teste 3', idade: 45,  sexo: 'Fem', dtNascimento: '24/01/1994', curso: 'Sistemas da informacao' }
  ];


  displayedColumns: string[] = ['Nome', 'Idade', 'Sexo', 'Data de Nascimento', 'Curso'];


  ngOnInit(): void {

    this.exibeTabela = true;
  }



}

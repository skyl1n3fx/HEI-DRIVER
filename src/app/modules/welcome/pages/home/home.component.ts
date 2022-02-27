import { Component, OnInit } from '@angular/core';
import { PageTitle } from 'src/app/decorators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

// Decorador custom para establecer el título de la página
@PageTitle(['Bienvenido'])
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

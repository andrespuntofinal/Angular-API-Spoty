import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pruebahttp',
  templateUrl: './pruebahttp.component.html',
  styles: [
  ],
})
export class PruebahttpComponent implements OnInit {
  paises: any[] = [];

  constructor( private http: HttpClient) { 
   
    console.log('Constructor');
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe ( (respuesta: any) => {
      this.paises = respuesta;
      console.log(respuesta);

      })


  }

  ngOnInit(): void {
  }

}

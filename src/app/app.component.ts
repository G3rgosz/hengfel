/*
* File: app.component.ts
* Author: Szivák Gergő
* Copyright: 2022, Szivák Gergő
* Group: Szoft II/N
* Date: 2022-01-13
* Github: https://github.com/Gergosz-2000/hengfel
* Licenc: GNU GPL
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hengfel';
  radius: string;
  length: string;
  surface: string;
  constructor(){
    this.radius = '';
    this.length = '';
    this.surface = '';
  }
  calcSurface(): any {
    this.surface = "2π"+this.radius+"("+this.radius+"+"+this.length+")"+"="+String((2*Math.PI*Number(this.radius)*(Number(this.radius)+Number(this.length))).toFixed(2));
    this.radius = '';
    this.length = '';
  }
}

import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, CalculatorComponent],
  template: '<app-calculator></app-calculator>',
})
export class App {}

bootstrapApplication(App);

import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  minRollsCount = 0;
  maxRollsCount = 999;
  private _rollsCount = signal(NaN);

  get rollsCount(): number {
    return this._rollsCount();
  }

  set rollsCount(value: number) {
    this._rollsCount.set(value);
  }

  rice = computed(() => this.rollsCount * 0.333);
  water = computed(() => this.rollsCount * 0.4);
  vinegar = computed(() => this.rollsCount * 0.89);
  sugar = computed(() => this.rollsCount * 0.22);
  salt = computed(() => this.rollsCount * 0.22);
}

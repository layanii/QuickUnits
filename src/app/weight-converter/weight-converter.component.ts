import { Component } from '@angular/core';

@Component({
  selector: 'app-weight-converter',
  standalone: false,
  templateUrl: './weight-converter.component.html',
  styleUrl: './weight-converter.component.css'
})
export class WeightConverterComponent {
  weightUnits = ['Kilograms', 'Grams', 'Pounds', 'Ounces'];
  fromUnit = 'Kilograms';
  toUnit = 'Grams';
  inputValue: number = 0;
  result: number | null = null;

  convertWeight() {
    const conversionRates: any = {
      Kilograms: { Grams: 1000, Pounds: 2.20462, Ounces: 35.274 },
      Grams: { Kilograms: 0.001, Pounds: 0.00220462, Ounces: 0.035274 },
      Pounds: { Kilograms: 0.453592, Grams: 453.592, Ounces: 16 },
      Ounces: { Kilograms: 0.0283495, Grams: 28.3495, Pounds: 0.0625 }
    };

    if (this.fromUnit === this.toUnit) {
      this.result = this.inputValue;
    } else {
      this.result = this.inputValue * (conversionRates[this.fromUnit][this.toUnit] || 1);
      //5 * [1][1] = 5000 or 5 
    }
  }

  swapUnits() {
    [this.fromUnit, this.toUnit] = [this.toUnit, this.fromUnit];
    this.convertWeight();
  }
}

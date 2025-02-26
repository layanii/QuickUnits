import { Component } from '@angular/core';

@Component({
  selector: 'app-convert-length',
  standalone: false,
  templateUrl: './convert-length.component.html',
  styleUrl: './convert-length.component.css'
})
export class ConvertLengthComponent {
  lengthUnits: string[] = ['Meter', 'Kilometer', 'Centimeter', 'Millimeter', 'Inch', 'Foot', 'Yard', 'Mile'];
  fromUnit: string = 'Meter';
  toUnit: string = 'Kilometer';
  inputValue: number = 0;
  result: number | null = null;

  convertLength(): void {
    const conversionRates: { [key: string]: number } = {
      'Meter': 1,
      'Kilometer': 0.001,
      'Centimeter': 100,
      'Millimeter': 1000,
      'Inch': 39.3701,
      'Foot': 3.28084,
      'Yard': 1.09361,
      'Mile': 0.000621371
    };

    const fromRate = conversionRates[this.fromUnit];
    const toRate = conversionRates[this.toUnit];

    this.result = (this.inputValue * toRate) / fromRate;
  }

  swapUnits(): void {
    [this.fromUnit, this.toUnit] = [this.toUnit, this.fromUnit];
    this.convertLength();
  }
}

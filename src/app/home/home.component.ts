import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  units = [
    { name: 'Currency', icon: '/assets/currency-icon.jpg', type: 'currency' },
    { name: 'Length', icon: '/assets/length2.png', type: 'length' },
    { name: 'Weight', icon: '/assets/Weight.png', type: 'weight' }
  ];

  selectUnit(unit: string) {
    console.log('Selected unit:', unit);
    
    // لاحقًا نقدر نربطها بصفحة التحويل لكل خدمة
  }
}

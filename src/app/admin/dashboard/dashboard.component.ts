import { Component } from '@angular/core';
import { CarCardComponent } from "../../shared/car-card/car-card.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CarCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}

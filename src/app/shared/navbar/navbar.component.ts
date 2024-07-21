import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations: [
    trigger('searchAnimation', [
      state('closed', style({
        transform: 'translateX(0)',
      })),
      state('open', style({
        transform: 'translateX(-50px)',
      })),
      transition('closed => open', [
        animate('0.3s ease-in')
      ]),
      transition('open => closed', [
        animate('0.3s ease-out')
      ]),
    ])
  ]
})
export class NavbarComponent {

  isAdmin: boolean = true;
  isLogin: boolean = true;
  search: boolean = false


  openSearch() {
    this.search = !this.search
  }



}

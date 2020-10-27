import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



import { navElements } from './header.config';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
 
  menuHidden = true;
  pages: any[];
  constructor(
    private router: Router,
    
  ) {}

  ngOnInit() {
    this.pages = navElements;
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  

  
}

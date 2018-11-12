import { Component, OnInit } from '@angular/core';
import { NavStyle } from '../interfaces/navStyle.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navStyle: NavStyle = {
    btnFunction: 'search',
    btnColor: '#ffffff',
    navColor: '#222222',
  }

  searchStyle: NavStyle = {
    btnFunction: 'close',
    btnColor: '#222222',
    navColor: '#ffffff',
  }

  currentStyle: NavStyle;
  currentState: string;

  constructor(private router: Router) {
    this.currentStyle = this.navStyle;
    this.currentState = 'nav';
  }

  toggleSearchState() {
    if(this.currentState === 'nav') {
      this.currentStyle = this.searchStyle;
    }
    else 
      this.currentStyle = this.navStyle;
    this.currentState = (this.currentState === 'nav' ? 'search' : 'nav');
  }
  
  onEnter(value: string) {
    if(value && value.length)
      this.router.navigate(['/countries'], {queryParams: {
        category: 'name',
        value: value
      }});

  }

  ngOnInit() {
  }

}

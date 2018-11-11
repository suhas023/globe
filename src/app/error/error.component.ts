import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  @Input() errorOccurred: boolean;
  @Input() errorMessage: string;
  message: string;
  fontFaces: string[] = ['(˚Δ˚)b', '(^-^*)', '(>_<)', '(o^^)o', '\\(o_o)/', '(^_^)b'];
  face: string;
  constructor() {
    this.face = this.fontFaces[Math.floor(Math.random()*6)];
  }

  ngOnInit() {
    this.message = this.errorMessage || 'Bad Request';
  }
}

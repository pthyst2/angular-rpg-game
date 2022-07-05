import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'button-base',
  templateUrl: './button-base.component.html',
  styleUrls: ['./button-base.component.sass'],
})
export class ButtonBaseComponent implements OnInit {
  @Input() label: string = 'Button Base';
  constructor() {}

  ngOnInit(): void {}
  consoleLog() {
    console.log('Người dùng nhấn nút ' + this.label);
  }
}

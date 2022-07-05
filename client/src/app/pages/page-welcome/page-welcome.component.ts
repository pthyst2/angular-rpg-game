import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-welcome',
  templateUrl: './page-welcome.component.html',
  styleUrls: ['./page-welcome.component.sass'],
})
export class PageWelcomeComponent implements OnInit {
  title: string = 'Huyền Thoại Võ Lâm';
  buttons = {
    login: {
      label: 'Đăng Ký',
    },
    register: {
      label: 'Đăng Nhập',
    },
  };
  constructor() {}

  ngOnInit(): void {}
}

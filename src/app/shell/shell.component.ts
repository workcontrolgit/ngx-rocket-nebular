import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/home',
      home: true,
    },
    {
      title: 'About',
      icon: 'people-outline',
      link: '/about',
    },
  ];

  constructor(private readonly sidebarService: NbSidebarService) {}

  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
  }

  ngOnInit() {}
}

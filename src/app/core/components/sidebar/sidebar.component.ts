import { Component } from '@angular/core';
import { MenuItem } from '@models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public navTitle = 'Main navigation';
  public menuItems: MenuItem[] = [
    {
      name: 'Home',
      path: '/home',
      icon: '_icon-home'
    },
    {
      name: 'Search',
      path: '/search',
      icon: '_icon-search'
    }
  ];
}

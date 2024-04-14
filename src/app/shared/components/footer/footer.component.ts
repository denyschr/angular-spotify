import { Component } from '@angular/core';
import { MenuItem, SocialItem } from '../../../core/models';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public navTitle = 'Secondary navigation';

  public companyMenuItems: MenuItem[] = [
    {
      name: 'About',
      path: ''
    },
    {
      name: 'Jobs',
      path: ''
    },
    {
      name: 'For the Record',
      path: ''
    }
  ];

  public communitiesMenuItems: MenuItem[] = [
    {
      name: 'For Artists',
      path: ''
    },
    {
      name: 'Developers',
      path: ''
    },
    {
      name: 'Advertising',
      path: ''
    },
    {
      name: 'Investors',
      path: ''
    },
    {
      name: 'Vendors',
      path: ''
    }
  ];

  public usefulLinksMenuItems: MenuItem[] = [
    {
      name: 'Support',
      path: ''
    },
    {
      name: 'Free Mobile App',
      path: ''
    }
  ];

  public extraMenuItems: MenuItem[] = [
    { name: 'Legal', path: '' },
    { name: 'Safety & Privacy Center', path: '' },
    { name: 'Privacy Policy', path: '' },
    { name: 'Cookies', path: '' },
    { name: 'About Ads', path: '' },
    { name: 'Accessibility', path: '' }
  ];

  public socialItems: SocialItem[] = [
    {
      path: '',
      icon: '_icon-instagram'
    },
    {
      path: '',
      icon: '_icon-twitter'
    },
    {
      path: '',
      icon: '_icon-facebook'
    }
  ];
}

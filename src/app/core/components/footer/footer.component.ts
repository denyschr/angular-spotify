import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem, SocialItem } from '@models';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  public navTitle = 'Secondary navigation';

  public companyMenuItems: MenuItem[] = [
    {
      name: 'About',
      path: '/home'
    },
    {
      name: 'Jobs',
      path: '/home'
    },
    {
      name: 'For the Record',
      path: '/home'
    }
  ];

  public communitiesMenuItems: MenuItem[] = [
    {
      name: 'For Artists',
      path: '/home'
    },
    {
      name: 'Developers',
      path: '/home'
    },
    {
      name: 'Advertising',
      path: '/home'
    },
    {
      name: 'Investors',
      path: '/home'
    },
    {
      name: 'Vendors',
      path: '/home'
    }
  ];

  public usefulLinksMenuItems: MenuItem[] = [
    {
      name: 'Support',
      path: '/home'
    },
    {
      name: 'Free Mobile App',
      path: '/home'
    }
  ];

  public extraMenuItems: MenuItem[] = [
    { name: 'Legal', path: '/home' },
    { name: 'Safety & Privacy Center', path: '/home' },
    { name: 'Privacy Policy', path: '/home' },
    { name: 'Cookies', path: '/home' },
    { name: 'About Ads', path: '/home' },
    { name: 'Accessibility', path: '/home' }
  ];

  public socialItems: SocialItem[] = [
    {
      path: '/home',
      icon: '_icon-instagram'
    },
    {
      path: '/home',
      icon: '_icon-twitter'
    },
    {
      path: '/home',
      icon: '_icon-facebook'
    }
  ];
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { randomEmoji } from '@utils';

@Component({
  selector: 'sp-greeting',
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GreetingComponent {
  get message(): string {
    const now = new Date();
    const hours = now.getHours();
    const text = hours < 12 ? 'Morning 🌞' : hours < 18 ? 'Afternoon 🌤' : 'Evening 🌙';
    return `Good ${text} ${randomEmoji()}`;
  }
}

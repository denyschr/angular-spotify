import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserService } from '@services';
import { randomEmoji } from '@utils';
import { map } from 'rxjs';

@Component({
  selector: 'sp-greeting',
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GreetingComponent {
  public readonly $message = inject(UserService)
    .getUserProfile()
    .pipe(map(res => this.getMessage(res.display_name)));

  private getMessage(name: string): string {
    const now = new Date();
    const hours = now.getHours();
    const text = hours < 12 ? 'Morning 🌞' : hours < 18 ? 'Afternoon 🌤' : 'Evening 🌙';
    return `Good ${text} ${randomEmoji()} ${name}`;
  }
}

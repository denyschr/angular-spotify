import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'as-search',
  templateUrl: './search.page.html',
  styleUrl: './search.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SearchService]
})
export class SearchPage {}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Sailor } from '../../models/sailor.model';

@Component({
  selector: 'eslg-sailors-list',
  standalone: true,
  imports: [],
  templateUrl: './sailors-list.html',
  styleUrl: './sailors-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SailorsList {
  @Input() sailors: Sailor[] = [];
}

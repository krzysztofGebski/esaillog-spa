import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sailors',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './sailors.component.html',
  styleUrl: './sailors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SailorsComponent { }

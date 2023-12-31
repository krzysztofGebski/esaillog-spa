import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SailorsComponent } from '../sailors/sailors.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, SailorsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent { }

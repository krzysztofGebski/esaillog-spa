import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SailorsService } from './sailors.service';
import { Sailor } from './models/sailor';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sailors',
  standalone: true,
  imports: [
    CommonModule, HttpClientModule
  ],
  templateUrl: './sailors.component.html',
  styleUrl: './sailors.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SailorsComponent implements OnInit{

  sailors: Sailor[] = [];

  constructor(private sailorsService: SailorsService) { }

  ngOnInit(): void {
    this.sailorsService.getSailors().subscribe(sailors => {
      this.sailors = sailors;
    });
  }
}

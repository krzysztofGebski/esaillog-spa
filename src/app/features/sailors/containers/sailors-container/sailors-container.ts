import { Component, inject, OnInit } from '@angular/core';
import { SailorsService } from '../../services/sailors.service';
import { catchError, Observable, of } from 'rxjs';
import { Sailor } from '../../models/sailor.model';
import { SailorsList } from '../../components/sailors-list/sailors-list';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'eslg-sailors-container',
  standalone: true,
  imports: [SailorsList, AsyncPipe],
  templateUrl: './sailors-container.html',
  styleUrl: './sailors-container.scss',
})
export class SailorsContainer implements OnInit {
  sailors$!: Observable<Sailor[]>;
  error: string | null = null;

  private sailorsService = inject(SailorsService);

  ngOnInit(): void {
    this.sailors$ = this.sailorsService.getSailors().pipe(
      catchError((err) => {
        this.error = err.message;
        return of([]);
      })
    );
  }
}

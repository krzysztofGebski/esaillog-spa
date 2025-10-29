import { Component, inject, OnInit } from '@angular/core';
import { SailorsApiService } from '../../services/sailors-api.service';
import { catchError, Observable, of } from 'rxjs';
import { SailorsList } from '../../components/sailors-list/sailors-list';
import { AsyncPipe } from '@angular/common';
import { SailorResponse } from '../../models/sailor-response';

@Component({
  selector: 'eslg-sailors-container',
  standalone: true,
  imports: [SailorsList, AsyncPipe],
  templateUrl: './sailors-container.html',
  styleUrl: './sailors-container.scss',
})
export class SailorsContainer implements OnInit {
  sailors$: Observable<SailorResponse[]> = of([]);
  error: string | null = null;

  private sailorsService = inject(SailorsApiService);

  ngOnInit(): void {
    this.getSailorsList();
  }

  private getSailorsList() {
    this.sailors$ = this.sailorsService.getSailors().pipe(
      catchError((err) => {
        this.error = err.message;
        return of([]);
      })
    );
  }
}

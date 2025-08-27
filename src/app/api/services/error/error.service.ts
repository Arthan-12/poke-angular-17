import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HTTP_STATUS_CODE } from '../../../enums/status-code-enum';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private statusPlaceholderSubject: BehaviorSubject<'notFound' | null>;

  constructor() {
    this.statusPlaceholderSubject = new BehaviorSubject<'notFound' | null>(
      null
    );
  }

  get statusPlaceholder$() {
    return this.statusPlaceholderSubject.asObservable();
  }

  public setErrorStatus(errorCode: number) {
    if (errorCode === HTTP_STATUS_CODE.REQUEST_NOT_FOUND) {
      console.error('Pokémon não encontrado!');
      this.statusPlaceholderSubject.next('notFound');
    } else {
      this.statusPlaceholderSubject.next(null);
    }
  }
}

import { NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon-search-input',
  templateUrl: './pokemon-search-input.component.html',
  styleUrls: ['./pokemon-search-input.component.scss'],
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, FormsModule],
})
export class PokemonSearchInputComponent implements OnInit {
  @Input() inputTitle = '';
  @Output() inputEmitter = new EventEmitter<string>();
  @Output() keyboardEmitter = new EventEmitter<any>();
  @Output() resetEmitter = new EventEmitter<boolean>();
  clearInput = false;
  searchTerm = '';
  placeholder = 'Type a pokemon name or id';
  constructor() {}

  ngOnInit(): void {}

  emitInputValue() {
    if (this.searchTerm) this.inputEmitter.emit(this.searchTerm);
  }

  keyboardValidation(event: any) {
    if (
      event.key === 'Enter' ||
      event.key === 'Backspace' ||
      event.key === 'Delete'
    ) {
      this.keyboardEmitter.emit(event.key);
    }
  }

  resetValueEmitter() {
    this.clearInput = true;
    this.resetEmitter.emit(this.clearInput);
    this.clearInput = false;
  }
}

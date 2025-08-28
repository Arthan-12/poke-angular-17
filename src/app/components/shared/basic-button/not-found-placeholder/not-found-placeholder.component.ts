import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found-placeholder',
  templateUrl: './not-found-placeholder.component.html',
  styleUrls: ['./not-found-placeholder.component.scss'],
  standalone: true,
})
export class NotFoundPlaceholderComponent implements OnInit {
  @Input() notFoundPlaceholderText = '';

  constructor() {}

  ngOnInit(): void {}
}

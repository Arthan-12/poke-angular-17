import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-button',
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class BasicButtonComponent implements OnInit {
  @Input() btnTitle = '';
  @Input() color: 'blue' | 'cerulean' | 'red' | 'green' | 'default' = 'default';
  @Input() size: 'small' | 'medium' = 'small';
  @Input() isBtnDisabled = false;

  constructor() {}

  ngOnInit(): void {}
}

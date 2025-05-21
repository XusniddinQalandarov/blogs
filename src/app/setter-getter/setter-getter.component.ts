import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-setter-getter',
  imports: [CommonModule, TranslocoModule],
  templateUrl: './setter-getter.component.html',
  styleUrl: './setter-getter.component.scss',
})
export class SetterGetterComponent {}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-setter-getter-angular',
  imports: [CommonModule, TranslocoModule],
  templateUrl: './setter-getter-angular.component.html',
  styleUrl: './setter-getter-angular.component.scss',
})
export class SetterGetterAngularComponent {}

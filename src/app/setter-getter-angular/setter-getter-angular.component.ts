import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-setter-getter-angular',
  imports: [RouterLink, CommonModule],
  templateUrl: './setter-getter-angular.component.html',
  styleUrl: './setter-getter-angular.component.scss',
})
export class SetterGetterAngularComponent {}

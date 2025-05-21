import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SetterGetterComponent } from './setter-getter/setter-getter.component';

@Component({
  selector: 'app-root',
  imports: [SetterGetterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'blogs';
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-pipe',
  imports: [CommonModule, TranslocoModule],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss',
})
export class PipeComponent {}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LateralmenuComponent } from './lateralmenu/lateralmenu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LateralmenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'YouTube';
}

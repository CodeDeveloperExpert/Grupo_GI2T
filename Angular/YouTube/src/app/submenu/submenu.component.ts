import { Component, Input } from '@angular/core';
import { ItemmenuComponent } from '../itemmenu/itemmenu.component';

@Component({
  selector: 'app-submenu',
  standalone: true,
  imports: [ItemmenuComponent],
  templateUrl: './submenu.component.html',
  styleUrl: './submenu.component.sass'
})
export class SubmenuComponent {
  @Input() public opciones: any;
}

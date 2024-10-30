import { ItemmenuComponent } from './../itemmenu/itemmenu.component';
import { Component } from '@angular/core';
import { SubmenuComponent } from '../submenu/submenu.component';

@Component({
  selector: 'app-lateralmenu',
  standalone: true,
  imports: [SubmenuComponent],
  templateUrl: './lateralmenu.component.html',
  styleUrl: './lateralmenu.component.sass'
})
export class LateralmenuComponent {
  public menu: any = [
    {
      submenu: [
        {
          title: 'Inicio',
          icon: 'fa-solid fa-igloo',
          link: '/dashoard'
        },
        {
          title: 'Shorts',
          icon: 'fa-solid fa-scissors',
          link: '/shorts'
        }
      ],
    },
    {
      submenu: [
        {
          title: 'Inicio',
          icon: 'fa-solid fa-igloo',
          link: '/dashoard'
        },
        {
          title: 'Shorts',
          icon: 'fa-solid fa-scissors',
          link: '/shorts'
        }
      ],
    },
    {
      submenu: [
        {
          title: 'Inicio',
          icon: 'fa-solid fa-igloo',
          link: '/dashoard'
        },
        {
          title: 'Shorts',
          icon: 'fa-solid fa-scissors',
          link: '/shorts'
        }
      ],
    },
    {
      submenu: [
        {
          title: 'Inicio',
          icon: 'fa-solid fa-igloo',
          link: '/dashoard'
        },
        {
          title: 'Shorts',
          icon: 'fa-solid fa-scissors',
          link: '/shorts'
        }
      ],
    },
    {
      submenu: [
        {
          title: 'Inicio',
          icon: 'fa-solid fa-igloo',
          link: '/dashoard'
        },
        {
          title: 'Shorts',
          icon: 'fa-solid fa-scissors',
          link: '/shorts'
        }
      ],
    },
    {
      submenu: [
        {
          title: 'Inicio',
          icon: 'fa-solid fa-igloo',
          link: '/dashoard'
        },
        {
          title: 'Shorts',
          icon: 'fa-solid fa-scissors',
          link: '/shorts'
        }
      ],
    },
    {
      submenu: [
        {
          title: 'Inicio',
          icon: 'fa-solid fa-igloo',
          link: '/dashoard'
        },
        {
          title: 'Shorts',
          icon: 'fa-solid fa-scissors',
          link: '/shorts'
        }
      ],
    },
    {
      title: 'Tú',
      submenu: [
        {
          title: 'Cuentas',
          icon: 'fa-solid fa-sliders',
          link: '/accounts'
        },
        {
          title: 'Lista de Reproducción',
          icon: 'fa-solid fa-headphones',
          link: '/playlist'
        }
      ],
    }
  ];
}

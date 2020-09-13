import { Component } from '@angular/core';

import { menu } from '../side-menu/mocks/menu';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  menu = menu;
}

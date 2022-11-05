import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() deviceXs: boolean;

  openMenu: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.openMenu = !this.openMenu;
  }
}

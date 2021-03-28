import {
  Component,
  OnInit
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

  animations: [
    trigger(
      'OutAnimation',
      [
        transition(
          ':leave',
          [
            style({
              opacity: 1
            }),
            animate('0.2s ease-in',
              style({
                opacity: 0
              }))
          ]
        )
      ]
    ),
    trigger(
      'searchAnimation',
      [
        transition(
          ':enter',
          [
            style({
              opacity: 0
            }),
            animate('0.2s ease-in',
              style({
                opacity: 1
              }))
          ]
        )
      ]
    )
  ]
})

export class NavbarComponent implements OnInit {
  name = 'Blog';
  hamburger = true;
  close = false;
  sidenav = false;
  categories = false;
  form = false;
  searchSpan = true;
  search = true;
  closeSearch = false;

  constructor() {}

  ngOnInit(): void {}

  openNav = () => {
    this.hamburger = false;
    this.close = true;
    this.sidenav = true;
  }
  closeNav = () => {
    this.hamburger = true;
    this.close = false;
    this.sidenav = false;
    this.categories = false;
  }
  openNavCategories = () => {
    this.categories = true;
  }
  closeNavCategories = () => {
    this.categories = false;
  }
  openNavCategoriesDesktop = () => {
    this.categories = true;
  }
  closeNavCategoriesDesktop = () => {
    this.categories = false;
  }
  openForm = () => {
    this.form = true;
    this.searchSpan = false;
    this.closeSearch = true;
    this.search = false;
  }
  closeForm = () => {
    this.form = false;
    this.closeSearch = false;
    this.search = true;
    this.searchSpan = true;
  }
}

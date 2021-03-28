import { Component, OnInit, Input } from '@angular/core';
import 'lazysizes';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 @Input() currentCategory: string;
 @Input() currentArticle: string;
  constructor() { }

  ngOnInit(): void {
  }

}

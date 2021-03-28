import { Component, OnInit, ElementRef, OnDestroy, AfterContentInit } from '@angular/core';
declare const require: any;
const ScrollOut = require('scroll-out');
import 'lazysizes';
@Component({
  selector: 'app-category2',
  templateUrl: './category2.component.html',
  styleUrls: ['./category2.component.scss']
})
export class Category2Component implements OnInit, OnDestroy, AfterContentInit {
  currentCategory: string;
  currentArticle: string;
  category = 'Category2';
  article2 = 'article2';
  so: any;
  constructor(private el: ElementRef) {}

  ngAfterContentInit(): void {
    this.so = ScrollOut({
      scope: this.el.nativeElement,
      once: true
    });
  }

  ngOnDestroy(): void {
    this.so.teardown();
  }
  ngOnInit(): void {
    window.scroll({
    top: 1,
    left: 0,
    behavior: 'smooth'
  });
  }
}

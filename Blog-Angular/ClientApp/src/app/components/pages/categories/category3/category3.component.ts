import { Component, OnInit, ElementRef, OnDestroy, AfterContentInit } from '@angular/core';
declare const require: any;
const ScrollOut = require('scroll-out');
import 'lazysizes';
@Component({
  selector: 'app-category3',
  templateUrl: './category3.component.html',
  styleUrls: ['./category3.component.scss']
})
export class Category3Component implements OnInit, OnDestroy, AfterContentInit {
  currentCategory: string;
  currentArticle: string;
  category = 'Category3';
  article3 = 'article3';
  article7 = 'article7';
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

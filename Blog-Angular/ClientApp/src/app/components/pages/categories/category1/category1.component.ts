import { Component, OnInit, ElementRef, AfterContentInit, OnDestroy } from '@angular/core';
declare const require: any;
const ScrollOut = require('scroll-out');
import 'lazysizes';
@Component({
  selector: 'app-category1',
  templateUrl: './category1.component.html',
  styleUrls: ['./category1.component.scss']
})
export class Category1Component implements OnInit, AfterContentInit, OnDestroy {
  currentCategory: string;
  currentArticle: string;
  category = 'Category1';
  article1 = 'article1';
  article4 = 'article4';
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

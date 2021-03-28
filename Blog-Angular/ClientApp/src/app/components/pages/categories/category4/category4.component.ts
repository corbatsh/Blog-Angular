import { Component, OnInit, ElementRef, OnDestroy, AfterContentInit } from '@angular/core';
declare const require: any;
const ScrollOut = require('scroll-out');
import 'lazysizes';
@Component({
  selector: 'app-category4',
  templateUrl: './category4.component.html',
  styleUrls: ['./category4.component.scss']
})
export class Category4Component implements OnInit, OnDestroy, AfterContentInit {
  currentCategory: string;
  currentArticle: string;
  category = 'Category4';
  article6 = 'article6';
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

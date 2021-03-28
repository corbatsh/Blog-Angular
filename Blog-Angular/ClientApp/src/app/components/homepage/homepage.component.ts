import {
  Component,
  OnInit,
  OnDestroy,
  AfterContentInit,
  ElementRef
} from '@angular/core';
import 'lazysizes';
declare const require: any;
const ScrollOut = require('scroll-out');

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterContentInit, OnDestroy {
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

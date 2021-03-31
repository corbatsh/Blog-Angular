import { Component, OnInit } from '@angular/core';
import 'lazysizes';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  avatar: string;
  name: string;
  desc: string;

  person1 = {
    avatar: 'avatar1',
    name: 'First Name and Last Name',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse pellentesque enim leo, et porta sem porta quis.
    Mauris nec ligula nunc. Curabitur dictum massa nunc, ut
    elementum massa pellentesque vitae. Donec dolor nunc, ulla
    mcorper non felis sit amet, lacinia tincidunt nulla. Curabitu
    r semper felis eget dapibus gravida. Nunc`
  };

  person2 = {
    avatar: 'avatar2',
    name: 'First Name and Last Name',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Suspendisse pellentesque enim leo, et porta sem porta quis.
      Mauris nec ligula nunc.`
  };

  person3 = {
    avatar: 'avatar1',
    name: 'First Name and Last Name',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Suspendisse pellentesque enim leo, et porta sem porta quis
      Mauris nec ligula nunc. Curabitur dictum massa nunc,
       ut elementum massa pellentesque vitae. Donec dolor nunc,
        ullamcorper non`
  };

  avatar2 = 'avatar2';

  constructor() { }

  ngOnInit(): void {
  }

}

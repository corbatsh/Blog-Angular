import { Component, OnInit } from '@angular/core';
import { Controls } from '../../../models/controls';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  model: Partial<Controls> = { };
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Controls } from 'src/app/models/controls';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  model: Partial<Controls> = { };

  constructor() { }

  ngOnInit(): void {
  }
}

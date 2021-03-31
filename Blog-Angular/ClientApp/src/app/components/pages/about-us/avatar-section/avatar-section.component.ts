import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar-section',
  templateUrl: './avatar-section.component.html',
  styleUrls: ['./avatar-section.component.scss']
})
export class AvatarSectionComponent implements OnInit {
@Input() avatar: string;
@Input() name: string;
@Input() desc: string;
  constructor() { }

  ngOnInit(): void {
  }

}

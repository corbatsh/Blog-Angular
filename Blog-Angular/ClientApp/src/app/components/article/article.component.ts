import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() currentArticle: string;
  @Input() currentCategory: string;
  constructor() { }

  ngOnInit(): void {
  }

}

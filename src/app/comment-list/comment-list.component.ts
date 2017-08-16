import { Component, OnInit } from '@angular/core';
import { Comment } from '../comments.model';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})

export class CommentListComponent implements OnInit {
  comments: Comment[] = [
  	new Comment('first comment!', 'John Guy'),
  	new Comment('nice work!', 'John Guy'),
    new Comment('I would also like to congratulate you!','John Guy')
  ]
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../comments.model';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  	console.log("getting comments");
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {
  
  constructor() { }

  makeNewComment(comment, author) {
  	//newComment: Comment = new Comment(comment, author);
  }

  ngOnInit() {
  }

}

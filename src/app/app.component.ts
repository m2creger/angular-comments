import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Comment } from './comments.model';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CommentService]
})
export class AppComponent {
  comments: Comment[];
  selectedComment: Comment;

  constructor(private commentService: CommentService) {

  }
  onSubmit(form: NgForm) {
  	console.log(form);
  }
  onSelect(comment: Comment): void {
    this.selectedComment = comment;
  }
  getComments(): void {

    this.commentService.getComments().then(comments => this.comments = comments);

  }
  ngOnInit(): void {
    this.getComments();
  }
  editComment() {
    
  }
  
}
